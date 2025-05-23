import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  isCheckoutOpen: boolean
}

const initialState: CheckoutState = {
  isCheckoutOpen: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    open: (state) => {
      state.isCheckoutOpen = true
    },
    close: (state) => {
      state.isCheckoutOpen = false
    }
  }
})

export const { open, close } = checkoutSlice.actions
export default checkoutSlice.reducer
