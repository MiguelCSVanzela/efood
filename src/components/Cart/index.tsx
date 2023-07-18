import Button from "../Button";
import lixeira from "../../assets/images/lixeira.svg";
import {
  Overlay,
  CartContainer,
  SideBar,
  CartItem,
  Content,
  Total,
} from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../../store";
import { fechar, remover } from "../../store/reducers/carrinho";
import { getPrecoFormatado } from "../Product";

const Cart = () => {
  const { estaAberto, itens } = useSelector(
    (state: RootReducer) => state.carrinho
  );
  const dispatch = useDispatch();

  const fecharCarrinho = () => {
    dispatch(fechar());
  };
  const removeDoCarrinho = (id: number) => {
    dispatch(remover(id));
  };
  const getTotal = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  if (!itens.length) {
    dispatch(fechar());
  }

  return (
    <CartContainer className={estaAberto ? "visible" : ""}>
      <Overlay onClick={fecharCarrinho} />

      <SideBar>
        <ul>
          {itens.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <Content>
                <h3>{item.nome}</h3>
                <span>{getPrecoFormatado(item.preco)}</span>
                <img
                  src={lixeira}
                  alt="excluir prato da lista"
                  onClick={() => removeDoCarrinho(item.id)}
                />
              </Content>
            </CartItem>
          ))}
        </ul>

        <Total>
          <h3>Valor Total: </h3>
          <span>{getPrecoFormatado(getTotal())}</span>
        </Total>
        <Button theme="bege">Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  );
};

export default Cart;
