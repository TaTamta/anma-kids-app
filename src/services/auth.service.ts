import { api } from "@/lib/api";
import { tokenStorage } from "@/lib/auth-token";
import type { AuthResponse, User } from "@/types/user";

export const authService = {
  async login(email: string, password: string): Promise<User> {
    const { data } = await api.post<AuthResponse>("/auth/login", {
      email,
      password,
    });
    tokenStorage.set(data.token);
    return data.user;
  },

  async register(payload: {
    email: string;
    password: string;
    name: string;
  }): Promise<User> {
    const { data } = await api.post<AuthResponse>("/auth/register", payload);
    tokenStorage.set(data.token);
    return data.user;
  },

  async getCurrentUser(): Promise<User> {
    const { data } = await api.get<User>("/auth/me");
    return data;
  },

  logout(): void {
    tokenStorage.remove();
  },
};
