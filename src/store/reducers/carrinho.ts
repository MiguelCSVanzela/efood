import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Produto } from "../../pages/Home";

type ProdutoState = {
  itens: Produto[];
  estaAberto: boolean;
};

const initialState: ProdutoState = {
  itens: [],
  estaAberto: false,
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = state.itens.find((item) => item.id === action.payload.id);
      if (!produto) {
        state.itens.push(action.payload);
      } else {
        alert(
          "Hi, friend! Este prato já foi adcionado a sua lista. Que tal variar?"
        );
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload);
    },
    abrir: (state) => {
      state.estaAberto = true;
    },
    fechar: (state) => {
      state.estaAberto = false;
    },
  },
});

export const { adicionar, abrir, fechar, remover } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
