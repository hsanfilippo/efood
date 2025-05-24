import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import CartReducer from './reducers/cart'
import ModalReducer from './reducers/modal'
import CheckoutReducer from './reducers/checkout'

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    modal: ModalReducer,
    checkout: CheckoutReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
