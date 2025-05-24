import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CheckoutState = {
  isCheckoutOpen: boolean
  orderId: string | null
}

const initialState: CheckoutState = {
  isCheckoutOpen: false,
  orderId: null
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
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    },
    resetOrderId: (state) => {
      state.orderId = null
    }
  }
})

export const { open, close, setOrderId, resetOrderId } = checkoutSlice.actions
export default checkoutSlice.reducer
