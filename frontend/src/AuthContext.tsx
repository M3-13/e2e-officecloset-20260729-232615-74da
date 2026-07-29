import { createContext, useContext, useState, type ReactNode } from 'react'
import type { AuthState, LoginCredentials, RegisterCredentials, User } from './types'

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>
  register: (credentials: RegisterCredentials) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User | null>(null)

  const login = async (_credentials: LoginCredentials) => {}
  const register = async (_credentials: RegisterCredentials) => {}
  const logout = async () => {}

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: false,
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  return useContext(AuthContext)
}
