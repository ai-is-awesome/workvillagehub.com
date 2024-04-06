"use client";

import { AuthProvider } from "./hooks/AuthContext";

export function Providers({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
