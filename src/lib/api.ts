import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { tokenStorage } from "./auth-token";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = tokenStorage.get() ?? process.env.NEXT_PUBLIC_DEV_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Attach token to EVERY request (your current requirement)
api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
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
      Cookies.remove("token");
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
