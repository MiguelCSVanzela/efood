import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import vector from "../../assets/images/Vector.svg";
import { HeaderContainer, HeaderLink } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../../store";
import { abrir, fechar } from "../../store/reducers/carrinho";

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
              <HeaderLink to="/">Restaurantes</HeaderLink>
              <Link to="/">
                <img src={logo} alt="Logo efood" />
              </Link>
              <HeaderLink to="#" onClick={abrirCarrinho}>
                {itens.length} produto(s) no carrinho
              </HeaderLink>
            </div>
          </HeaderContainer>
        </>
      )}
    </>
  );
};

export default Header;
