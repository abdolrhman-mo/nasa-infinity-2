import { redirectHome } from "@/app/lib/actions"
import { loginAPI, signupAPI } from "@/app/lib/services/auth/authService"
import { syncCartWithServerAPI } from "@/app/lib/services/cartService"
import { CartItemType } from "@/app/lib/types/cartTypes"
import { createAsyncThunk } from "@reduxjs/toolkit"

interface AuthError {
  message: string
}

interface AuthRequest {
  firstName?: string
  lastName?: string
  email: string
  password: string 
  newUser: boolean 
}

interface AuthResponse {
  cartItems: CartItemType[]
  error: null
}

export const auth = createAsyncThunk<
    AuthResponse, 
    AuthRequest,
    {
      rejectValue: AuthError
    }
  >(
  'auth/auth', 
  async (
  { 
    firstName,
    lastName,
    email, 
    password, 
    newUser 
  }, {
    rejectWithValue
  }
) => {
  try {
      if (newUser && firstName && lastName) {
          await signupAPI(firstName, lastName, email, password)
      } else {
          await loginAPI(email, password)
      }
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
      if (cartItems.length > 0) {
          await syncCartWithServerAPI(cartItems)
      }
      localStorage.removeItem('cartItems')
      
      redirectHome()
      
      return { cartItems, error: null }
  } catch (error: any) {
    console.log('error', error)

    if (newUser) {
      return rejectWithValue({ message: 'Failed to create account. Please try again.' })
    } else {
      return rejectWithValue({ message: 'Failed to login account. Please try again.' })
    }
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {

  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken')
    localStorage.removeItem('email')
  }

  redirectHome()
})