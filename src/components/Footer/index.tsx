import logo from "../../assets/images/logo.svg";
import instagram from "../../assets/images/instagram-icon.svg";
import facebook from "../../assets/images/facebook-icon.svg";
import twitter from "../../assets/images/twitter-icon.svg";
import {
  Footer as FooterContainer,
  SocialLinks,
  AppDescrition,
} from "./styles";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <img src={logo} alt="logo efood" />
        <SocialLinks>
          <li>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
        </SocialLinks>
        <AppDescrition>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{" "}
        </AppDescrition>
      </div>
    </FooterContainer>
  );
};

export default Footer;
