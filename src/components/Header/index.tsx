import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import vector from "../../assets/images/Vector.svg";
import { HeaderContainer, HeaderLink } from "./styles";
export type Props = {
  layout: "home" | "perfil";
};
const Header = ({ layout }: Props) => (
  <>
    {layout === "home" ? (
      <>
        <HeaderContainer
          layout={layout}
          style={{ backgroundImage: `url(${vector})` }}
        >
          <div className="container">
            <Link to="/perfil">
              <img src={logo} alt="Logo efood" />
            </Link>
            <p>Viva experiências gastronômicas no conforto da sua casa</p>
          </div>
        </HeaderContainer>
      </>
    ) : (
      <>
        <HeaderContainer
          layout={layout}
          style={{ backgroundImage: `url(${vector})` }}
        >
          <div className="container">
            <HeaderLink href="#">Restaurantes</HeaderLink>
            <Link to="/">
              <img src={logo} alt="Logo efood" />
            </Link>
            <HeaderLink href="#">0 produto(s) no carrinho</HeaderLink>
          </div>
        </HeaderContainer>
      </>
    )}
  </>
);

export default Header;
