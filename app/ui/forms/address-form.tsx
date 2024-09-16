'use client'

import Heading from "../common/heading"
import Input from "./components/input"
import Select from "./components/select"
import Button from "../common/button"
import { ChangeEvent, useEffect, useState } from "react"
import { addAddress } from "@/redux/features/address/addressThunk"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { AddressRequest } from "@/app/lib/types/addressTypes"
import { fetchShippingRates } from "@/redux/features/dashboard/shippingRate/shippingRateThunk"

export default function AddressForm({
  setView,
}: {
  setView: any
}) {
  const dispatch = useAppDispatch()
  
  const shippingRates = useAppSelector((state) => state.shippingRate.items)
  const shippingRatesLoading = useAppSelector((state) => state.shippingRate.loading)

  useEffect(() => {
    dispatch(fetchShippingRates())
  }, [dispatch])
  
  const [formData, setFormData] = useState<AddressRequest>({
    country: "Egypt",
    city: "",
    governorate: "",
    address_text: "",
    is_default: false,
  })
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData({
        ...formData,
        [name]: checked,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleGovernorateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setFormData({
      ...formData,
      governorate: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addAddress({
      addressData: {
        country: formData.country,
        city: formData.city,
        governorate: formData.governorate,
        address_text: formData.address_text,
        is_default: formData.is_default,
      },
    }))
    setView()
  }

  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault()
    setView()
  }

  return (
    <form>
      <div className={`grid gap-2 md:grid-cols-6`}>
        <Heading level={4} className="col-span-6">Delivery</Heading>
        
        <Select
          name="country"
          options={['egypt']}
          value={formData.country}
          onChange={handleChange}
          className="col-span-6"
        />
        
        <Input
          name="address_text"
          value={formData.address_text}
          onChange={handleChange}
          placeholder="Address"
          className="col-span-6"
        />

        <Input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="col-span-6 md:col-span-3"
        />

        {shippingRatesLoading ? (
          <p className="col-span-2 md:col-span-1 mb-2 mt-4">Loading...</p>
        ) : (
          <Select
            name="governorate"
            options={(() => {
              const governorates = shippingRates.map((shippingRate) => shippingRate.governorate)
              governorates.unshift("Governorate")
              return governorates
            })()}
            value={formData.governorate}
            onChange={handleGovernorateChange}
            className="col-span-6 md:col-span-3"
          />
        )}

        <div className="col-span-6">
          <input
            className="rounded mr-4 cursor-pointer"
            type="checkbox"
            name="is_default"
            checked={formData.is_default}
            onChange={handleChange}
          />
          <label className="italic" htmlFor="default">Set as default address</label>
        </div>

        <Button onClick={handleCancel} className="col-span-6 md:col-span-3" theme="light">Cancel</Button>
        <Button onClick={handleSubmit} className="col-span-6 md:col-span-3">Save</Button>
      </div>
    </form>
  )
}
