import axios, { AxiosError } from "axios";
import { tokenStorage } from "./auth-token";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

// Attach the auth token to every request.
// Falls back to NEXT_PUBLIC_DEV_TOKEN so the API can be explored locally before login exists.
api.interceptors.request.use((config) => {
  const token = tokenStorage.get() ?? process.env.NEXT_PUBLIC_DEV_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Normalize errors and handle 401 globally
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    if (error.response?.status === 401) {
      tokenStorage.remove();
      if (
        typeof window !== "undefined" &&
        !window.location.pathname.startsWith("/login")
      ) {
        window.location.href = "/login";
      }
    }
    // Normalize error message so callers always get a string
    const message =
      error.response?.data?.message ?? error.message ?? "Something went wrong";
    return Promise.reject(new Error(message));
  },
);
