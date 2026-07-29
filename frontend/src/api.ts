import type { Category, ClothingItem, LoginCredentials, RegisterCredentials, User } from './types'

const BASE = '/api'

async function request(path: string, options: RequestInit = {}): Promise<Response> {
  const response = await fetch(`${BASE}${path}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
  return response
}

export async function register(credentials: RegisterCredentials): Promise<void> {
  await request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
}

export async function login(credentials: LoginCredentials): Promise<void> {
  await request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
}

export async function logout(): Promise<void> {
  await request('/auth/logout', { method: 'POST' })
}

export async function deleteAccount(): Promise<void> {
  await request('/auth/account', { method: 'DELETE' })
}

export async function getMe(): Promise<User> {
  const res = await request('/auth/me')
  return res.json()
}

export async function getCategories(): Promise<Category[]> {
  const res = await request('/categories')
  return res.json()
}

export async function createCategory(name: string): Promise<Category> {
  const res = await request('/categories', {
    method: 'POST',
    body: JSON.stringify({ name }),
  })
  return res.json()
}

export async function updateCategory(id: number, name: string): Promise<Category> {
  const res = await request(`/categories/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name }),
  })
  return res.json()
}

export async function deleteCategory(id: number): Promise<void> {
  await request(`/categories/${id}`, { method: 'DELETE' })
}

export async function getClothing(categoryId?: number): Promise<ClothingItem[]> {
  const params = categoryId ? `?category_id=${categoryId}` : ''
  const res = await request(`/clothing${params}`)
  return res.json()
}

export async function createClothing(formData: FormData): Promise<ClothingItem> {
  const response = await fetch(`${BASE}/clothing`, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  })
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
  return response.json()
}

export async function updateClothing(id: number, formData: FormData): Promise<ClothingItem> {
  const response = await fetch(`${BASE}/clothing/${id}`, {
    method: 'PUT',
    credentials: 'include',
    body: formData,
  })
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
  return response.json()
}

export async function deleteClothing(id: number): Promise<void> {
  await request(`/clothing/${id}`, { method: 'DELETE' })
}

export function getImageUrl(filename: string): string {
  return `/api/images/${filename}`
}
