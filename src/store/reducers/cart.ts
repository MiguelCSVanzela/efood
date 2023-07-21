import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ProdutoState = {
  itens: Produto[]
  isOpen: boolean
  checkout: boolean
}

const initialState: ProdutoState = {
  itens: [],
  isOpen: false,
  checkout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const produto = state.itens.find((item) => item.id === action.payload.id)
      if (!produto) {
        state.itens.push(action.payload)
      } else {
        alert(
          'Hi, friend! Este prato já foi adicionado à sua lista. Que tal variar?'
        )
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    inCheckout: (state) => {
      state.checkout = true
    },
    outCheckout: (state) => {
      state.checkout = false
    },
    clear: (state) => {
      state.itens = []
    }
  }
})

export const {
  add,
  remove,
  openCart,
  closeCart,
  inCheckout,
  outCheckout,
  clear
} = cartSlice.actions
export default cartSlice.reducer
