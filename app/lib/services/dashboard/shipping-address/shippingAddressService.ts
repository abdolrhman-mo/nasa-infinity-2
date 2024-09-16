import { shippingRateRequest } from '@/app/lib/types/dashboard/shippingRateTypes'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchShippingRatesAPI = async () => {
  try {
    const res = await axios.get(`${API_URL}/shipping-rate/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`,
      },
    })

    return res.data
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(`Error fetching shipping rates: ${error.response.statusText}`)
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error fetching shipping rates: No response received')
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error fetching cart items:', error.message)
    }
    return []
  }
}

export const createShippingRateAPI = async (shippingRateData: shippingRateRequest) => {
  try {
    const res = await axios.post(`${API_URL}/shipping-rate/`, shippingRateData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`,
      },
    })

    return res.data
  } catch (error: any) {
    console.error('Error creating shipping rate:', error)
    throw error
  }
}

export const updateShippingRateAPI = async (shippingRateId: number, shippingRateData: shippingRateRequest) => {
  try {
    const res = await axios.put(`${API_URL}/shipping-rate/${shippingRateId}/`, shippingRateData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`,
      },
    })

    return res.data
  } catch (error: any) {
    console.error('Error updating shipping rate:', error)
    throw error
  }
}

export const deleteShippingRateAPI = async (shippingRateId: number) => {
  try {
    const res = await axios.delete(`${API_URL}/shipping-rate/${shippingRateId}/`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('authToken')}`,
      },
    })

    return res.data
  } catch (error: any) {
    console.error('Error deleting shipping rate:', error)
    throw error
  }
}

