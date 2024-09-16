export interface shippingRateResponse {
  id: number
  governorate: string
  shipping_price: number
}

export interface shippingRateRequest {
  governorate: string
  shipping_price: number
}