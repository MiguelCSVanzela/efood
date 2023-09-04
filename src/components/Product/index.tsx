import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, openCart } from '../../store/reducers/cart'
import { getFormattedPrice } from '../../utils'

import closeIcon from '../../assets/images/fechar.png'
import Button from '../Button'
import * as S from './styles'

type Props = {
  id: number
  cover: string
  price: number
  name: string
  description: string
  portion: string
  dish: Produto
}
const Product = ({
  cover,
  price,
  id,
  name,
  description,
  portion,
  dish
}: Props) => {
  const [isClosed, setIsClosed] = useState(true)
  const dispatch = useDispatch()

  function getDescription(description: string) {
    if (description.length > 132) {
      return description.slice(0, 132) + '...'
    }
  }

  const closeModal = () => {
    setIsClosed(true)
  }

  function addToCart() {
    dispatch(add(dish))
    dispatch(openCart())
  }

  return (
    <>
      <S.Container>
        <li key={id}>
          <img src={cover} alt={name} />
          <h3>{name}</h3>
          <p>{getDescription(description)}</p>
          <S.BtnDetails theme="sky" onClick={() => setIsClosed(false)}>
            Mais Detalhes
          </S.BtnDetails>
        </li>
      </S.Container>
      <S.ModalContainer className={`container ${isClosed ? 'invisible' : ''}`}>
        <S.ModalContent>
          <div>
            <img
              className="closeIcon2"
              src={closeIcon}
              onClick={() => closeModal()}
            />
            <img src={cover} alt={name} />
          </div>
          <S.Text>
            <div>
              <img
                className="closeIcon"
                src={closeIcon}
                onClick={() => closeModal()}
              />
              <h3>{name}</h3>
              <p>{description}</p>
              <p>Serve: De {portion}</p>
            </div>
            <div>
              <Button theme="sky" onClick={addToCart}>
                Adicionar ao carrinho - {getFormattedPrice(price).toString()}
              </Button>
            </div>
          </S.Text>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  )
}

export default Product
