import { useSelector, useDispatch } from 'react-redux'

import Button from '../Button'
import lixeira from '../../assets/images/lixeira.svg'
import Checkout from '../Checkout'

import { RootReducer } from '../../store'
import { closeCart, remove, inCheckout } from '../../store/reducers/cart'
import { getFormattedPrice } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, itens, checkout } = useSelector(
    (state: RootReducer) => state.cart
  )

  const close = () => {
    dispatch(closeCart())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotal = () => {
    return itens.reduce((acumulator, currentValue) => {
      return (acumulator += currentValue.preco)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'visible' : ''}>
      <S.Overlay onClick={close} />

      <S.SideBar>
        {checkout ? (
          <Checkout />
        ) : (
          <div>
            {itens.length > 0 ? (
              <>
                <ul>
                  {itens.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <S.Content>
                        <h3>{item.nome}</h3>
                        <span>{getFormattedPrice(item.preco)}</span>
                        <img
                          src={lixeira}
                          alt="excluir prato da lista"
                          onClick={() => removeItem(item.id)}
                        />
                      </S.Content>
                    </S.CartItem>
                  ))}
                </ul>
                <S.Total>
                  <h3>Valor Total: </h3>
                  <span>{getFormattedPrice(getTotal())}</span>
                </S.Total>
                <Button onClick={() => dispatch(inCheckout())} theme="beige">
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <S.Empty>Ainda não há itens em seu carrinho</S.Empty>
            )}
          </div>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
