import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import vector from "../../assets/images/Vector.svg";
import restauranteIcon from "../../assets/images/restaurante.svg";
import cesta from "../../assets/images/cesta-de-piquenique.svg";

import { HeaderContainer, HeaderLink, Icon, Word } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../../store";
import { abrir } from "../../store/reducers/carrinho";

export type Props = {
  layout: "home" | "perfil";
};

const Header = ({ layout }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.carrinho);
  const dispatch = useDispatch();

  const abrirCarrinho = () => {
    dispatch(abrir());
  };
  return (
    <>
      {layout === "home" ? (
        <>
          <HeaderContainer
            layout={layout}
            style={{ backgroundImage: `url(${vector})` }}
          >
            <div className="container">
              <Link to="/">
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
              <HeaderLink to="/">
                <Word>Restaurantes</Word>
                <Icon>
                  <img src={restauranteIcon} />{" "}
                </Icon>
              </HeaderLink>
              <Link to="/">
                <img src={logo} alt="Logo efood" />
              </Link>
              <HeaderLink to="#" onClick={abrirCarrinho}>
                <Word>{itens.length} produto(s) no carrinho</Word>
                <Icon>
                  {itens.length}
                  <img src={cesta} />{" "}
                </Icon>
              </HeaderLink>
            </div>
          </HeaderContainer>
        </>
      )}
    </>
  );
};

export default Header;
