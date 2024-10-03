'use client'

import { useState } from 'react'
import MobileOrderSummary from '@/app/ui/checkout/mobile-order-summary'
import CheckoutForm from '@/app/ui/forms/checkout-form'

export default function Page({
    params
}: {
    params: {
        id: number,
        size: string,
    }
}) {
    const [showSummary, setShowSummary] = useState(false)
    let handleShowSummary = () => {
        setShowSummary(value => !value)
    }
    const [shippingPrice, setShippingPrice] = useState<number | null>(null)

    return (
        <div className='text-sm text-gray-900'>
            <MobileOrderSummary
                showSummary={showSummary} 
                onShowSummary={handleShowSummary}
                buyItNowId={params.id}
                buyItNowSize={params.size}
                shippingPrice={shippingPrice}
            />

            <CheckoutForm
                buyItNowId={(params.id)}
                buyItNowSize={params.size}
                shippingPrice={shippingPrice}
                setShippingPrice={setShippingPrice}
            />
        </div>
    )
}