import { shippingRatesDefault } from "@/app/lib/constants/shipping-rates"
import { createShippingRateAPI, deleteShippingRateAPI, fetchShippingRatesAPI, updateShippingRateAPI } from "@/app/lib/services/dashboard/shipping-address/shippingAddressService"
import { shippingRateRequest, shippingRateResponse } from "@/app/lib/types/dashboard/shippingRateTypes"
import { RootState } from "@/redux/store"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { setActivePopup } from "../../popup/popupSlice"

export const fetchShippingRates = createAsyncThunk('shippingRate/fetchShippingRates', async () => {
  const shippingRates = await fetchShippingRatesAPI()

  return shippingRates
})

export const createShippingRate = createAsyncThunk('shippingRate/createShippingRate', async (
  shippingRateData: shippingRateRequest,
  { dispatch, getState }
) => {
  const state = getState() as RootState
  const shippingRates = state.shippingRate.items

  const existingItem = shippingRates.find((item: shippingRateResponse) => item.governorate === shippingRateData.governorate)

  let shippingRate
  if (existingItem) {
    dispatch(updateShippingRate({ shippingRateId:existingItem.id, shippingRateData }))
    // return existingItem
  } else {
    shippingRate = await createShippingRateAPI(shippingRateData)
    // dispatch(fetchShippingRates())
    return shippingRate
  }
  // console.log('create shipping rate', shippingRate)
})

export const updateShippingRate = createAsyncThunk('shippingRate/updateShippingRate', async (
  { shippingRateId, shippingRateData }: { shippingRateId: number, shippingRateData: shippingRateRequest },
  { dispatch }
) => {
  const shippingRate = await updateShippingRateAPI(shippingRateId, shippingRateData)
  
  return shippingRate
})

export const deleteShippingRate = createAsyncThunk('shippingRate/deleteShippingRate', async (
  shippingRateId: number,
  { dispatch, getState }
) => {
  const state = getState() as RootState
  if (state.shippingRate.items.length > 1) {
    const shippingRate = await deleteShippingRateAPI(shippingRateId)
    
    return shippingRateId
  } else {
    dispatch(setActivePopup({ activePopup: 'deleteLastRateError' }))
  }
})

export const resetShippingRates = createAsyncThunk('shippingRate/resetShippingRates', async (
  _,
  { getState }
) => {
  // Solution #1 a reset to default api
  // Solution #2 delete all shipping rates, and add the static default shipping rates
  // console.log('reseting shipping rates')
  const state = getState() as RootState
  state.shippingRate.items.forEach(async item => {
    const deleted = await deleteShippingRateAPI(item.id)
    // console.log('deleted', deleted)
  })
  shippingRatesDefault.forEach(async item => {
    const created = await createShippingRateAPI(item)
    // console.log('created', created)
  })
  // state.shippingRate.items.forEach(item =>
  //   dispatch(deleteShippingRate(item.id))
  // )
  // shippingRatesDefault.forEach(item =>
  //   dispatch(createShippingRate(item))
  // )
})