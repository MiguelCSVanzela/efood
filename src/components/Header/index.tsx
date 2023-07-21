import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { openCart } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/Vector.svg'
import restaurantIcon from '../../assets/images/restaurante.svg'
import basketIcon from '../../assets/images/cesta-de-piquenique.svg'
import * as S from './styles'

export type Props = {
  layout: 'home' | 'perfil'
}

const Header = ({ layout }: Props) => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.cart)

  const open = () => {
    dispatch(openCart())
  }

  return (
    <>
      {layout === 'home' ? (
        <>
          <S.HeaderContainer
            layout={layout}
            style={{ backgroundImage: `url(${vector})` }}
            id="home"
          >
            <div className="container">
              <Link to="/">
                <img src={logo} alt="Logo efood" />
              </Link>
              <p>Viva experiências gastronômicas no conforto da sua casa</p>
            </div>
          </S.HeaderContainer>
        </>
      ) : (
        <>
          <S.HeaderContainer
            layout={layout}
            style={{ backgroundImage: `url(${vector})` }}
          >
            <div className="container">
              <S.HeaderLink to="/">
                <S.Complement>Restaurantes</S.Complement>
                <S.Icon>
                  <img src={restaurantIcon} />{' '}
                </S.Icon>
              </S.HeaderLink>
              <Link to="/">
                <img src={logo} alt="Logo efood" />
              </Link>
              <S.HeaderLink to="#" onClick={open}>
                <S.Complement>
                  {itens.length} produto(s) no carrinho
                </S.Complement>
                <S.Icon>
                  {itens.length}
                  <img src={basketIcon} />{' '}
                </S.Icon>
              </S.HeaderLink>
            </div>
          </S.HeaderContainer>
        </>
      )}
    </>
  )
}

export default Header
