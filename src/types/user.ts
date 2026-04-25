export interface User {
  id: string;
  email: string;
  name: string;
  role: "USER" | "ADMIN";
}

export interface AuthResponse {
  user: User;
  token: string;
}
