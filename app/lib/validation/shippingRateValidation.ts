import * as yup from 'yup'

export const shippingRateSchema = yup.object().shape({
  governorate: yup.string()
    .required("Governorate is required.")
    .notOneOf(['Governorate', ''], 'Please select a governorate.'),
  shipping_price: yup.string()
    .required("Shipping price is required."),
})