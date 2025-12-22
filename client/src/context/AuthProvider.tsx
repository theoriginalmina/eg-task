import { useEffect, useState } from "react";
import { AuthContext, type User } from "./AuthContext";
import { api } from "../api";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  const fetchMe = async () => {
    try {
      const res = await api.get<User>("/auth/me");
      setUser(res.data);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  const login = async (email: string, password: string) => {
    await api.post("/auth/login", { email, password });
    await fetchMe();
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  const fetchUser = async (): Promise<User> => {
    const res = await api.get<User>("/users");
    return res.data;
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, login, logout, fetchUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
