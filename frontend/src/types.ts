export interface User {
  id: number
  email: string
}

export interface Category {
  id: number
  name: string
}

export interface ClothingItem {
  id: number
  name: string
  description: string | null
  image_filename: string | null
  category_id: number
  created_at: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
}
