import { shippingRateResponse } from "@/app/lib/types/dashboard/shippingRateTypes"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createShippingRate, deleteShippingRate, fetchShippingRates, resetShippingRates, updateShippingRate } from "./shippingRateThunk"
import { shippingRatesDefault } from "@/app/lib/constants/shipping-rates"

interface ShippingRateState {
  items: shippingRateResponse[]
  loading: boolean
  editItemLoading: number | false
  deleteItemLoading: boolean
  formDefaultData: shippingRateResponse | null
}

const initialState: ShippingRateState = {
  items: [],
  loading: true,
  editItemLoading: false,
  deleteItemLoading: false,
  formDefaultData: null,
}

const shippingRateSlice = createSlice({
  name: 'shippingRate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      // Fetch Shipping Rates
      .addCase(fetchShippingRates.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchShippingRates.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(fetchShippingRates.rejected, (state) => {
        state.loading = false
      })
      
      // Create Shipping Rate
      .addCase(createShippingRate.pending, (state) => {
        state.loading = true
      })
      .addCase(createShippingRate.fulfilled, (state, action) => {
        if (action.payload) {
          state.items.push(action.payload)
        }
        state.loading = false
      })
      .addCase(createShippingRate.rejected, (state) => {
        state.loading = false
      })
      
      // Update Shipping Rate
      .addCase(updateShippingRate.pending, (state, action) => {
        const { shippingRateId } = action.meta.arg
        
        state.editItemLoading = shippingRateId
      })
      .addCase(updateShippingRate.fulfilled, (state, action) => {
        let itemIndex = state.items.findIndex(item => 
          item.id === action.payload.id
        )
        state.items[itemIndex] = action.payload
        state.editItemLoading = false
      })
      .addCase(updateShippingRate.rejected, (state) => {
        state.editItemLoading = false
      })

      // Delete Shipping Rate
      .addCase(deleteShippingRate.pending, (state) => {
        state.deleteItemLoading = true
      })
      .addCase(deleteShippingRate.fulfilled, (state, action) => {
        if (action && action.payload) {
          state.items = state.items.filter(item => 
            item.id !== action.payload
          )
          state.deleteItemLoading = false
        } else {
          state.deleteItemLoading = false
        }
      })
      .addCase(deleteShippingRate.rejected, (state) => {
        state.deleteItemLoading = false
      })

      // Reset Shipping Rates
      .addCase(resetShippingRates.pending, (state) => {
        state.loading = true
      })
      .addCase(resetShippingRates.fulfilled, (state) => {
        state.items = shippingRatesDefault
        state.loading = false
      })
      .addCase(resetShippingRates.rejected, (state) => {
        state.loading = false
      })
    }
})

export const { } = shippingRateSlice.actions

// export const selectShippingRateForm = (state: any) => state.shippingRate.isShippingRateForm

export default shippingRateSlice.reducer