import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram-icon.svg'
import facebook from '../../assets/images/facebook-icon.svg'
import twitter from '../../assets/images/twitter-icon.svg'

import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterContainer>
      <div className="container">
        <HashLink smooth to="/#home">
          <img src={logo} className="logo" alt="logo efood" />
        </HashLink>
        <S.SocialLinks>
          <li>
            <a href="#">
              <img
                src={instagram}
                alt="Conheça nossos produtos no nosso instagram"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={facebook}
                alt="Conheça nossos produtos no nosso facebook"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={twitter}
                alt="Conheça nossos produtos no nosso tweeter"
              />
            </a>
          </li>
        </S.SocialLinks>
        <S.AppDescrition>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </S.AppDescrition>
      </div>
    </S.FooterContainer>
  )
}

export default Footer
