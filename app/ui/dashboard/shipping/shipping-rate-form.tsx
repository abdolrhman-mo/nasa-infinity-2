'use client'

import { NextPage } from 'next'
import { useFormik } from 'formik'
import { shippingRateSchema } from '@/app/lib/validation/shippingRateValidation'
import { useAppDispatch } from '@/redux/store'
import { hideBackgroundShadow, hidePopup } from '@/redux/features/popup/popupSlice'
import { useAppSelector } from '@/redux/hooks'
import { shippingRatesDefault } from '@/app/lib/constants/shipping-rates'
import Heading from '../../common/heading'
import Input from '../../forms/components/input'
import FloatingCntainer from '../../common/floating-container'
import Button from '../../common/button'
import clsx from 'clsx'
import Select from '../../forms/components/select'
import { createShippingRate, updateShippingRate } from '@/redux/features/dashboard/shippingRate/shippingRateThunk'

interface Props {}

const ShippingRateForm: NextPage<Props> = ({}) => {
  const dispatch = useAppDispatch()
  const activePopup = useAppSelector(state => state.popup.activePopup)
  const defaultData = useAppSelector(state => state.shippingRate.formDefaultData)

  const formik = useFormik({
    initialValues: defaultData || {
      governorate: '',
      shipping_price: 0,
    },
    validationSchema: shippingRateSchema,
    onSubmit: async (values) => {
      if (defaultData) {
        dispatch(updateShippingRate({ shippingRateId: defaultData.id, shippingRateData: values }))        
      } else {
        dispatch(createShippingRate(values))
      }
      dispatch(hidePopup())
    },
    enableReinitialize: true,
  })

  const handleCancel = () => {
    dispatch(hidePopup())
  }

  return (
    <FloatingCntainer className={clsx(
      {
        'hidden' : activePopup !== 'shippingRateForm'
      }
    )}>
      <Heading level={5} className='mx-auto w-fit'>
        {defaultData ? 'Edit ' : 'Add '}
        shipping rate
      </Heading>
      <form>
        <Select
          options={(() => {
            const governorates = shippingRatesDefault.map(shippingRate => shippingRate.governorate)
            governorates.unshift('Governorate')
            return governorates
          })()}
          defaultId={defaultData?.id}
          name='governorate'
          value={formik.values.governorate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.governorate && formik.errors.governorate}
          label='city/governorate' 
          className='grid grid-cols-2' 
        />
        <Input 
          name='shipping_price'
          value={formik.values.shipping_price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.shipping_price && formik.errors.shipping_price}
          type='number'
          label='shipping price' 
          className='grid grid-cols-2' 
        />
        <div className="flex justify-between mt-8 space-x-4">
          <Button onClick={handleCancel} theme='muted' className='w-2/5'>cancel</Button>
          <Button onClick={formik.handleSubmit} theme='success' className='w-2/5'>
            {defaultData ? 'edit' : 'create'}
          </Button>
        </div>
      </form>
    </FloatingCntainer>
  )
}

export default ShippingRateForm