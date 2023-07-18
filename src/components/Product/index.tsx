import { useState } from "react";
import { useDispatch } from "react-redux";

import { adicionar, abrir } from "../../store/reducers/carrinho";
import {
  Container,
  BtnDetails,
  ModalContainer,
  ModalContent,
  Text,
} from "./styles";
import closeIcon from "../../assets/images/fechar.png";
import Button from "../Button";
import { Produto } from "../../pages/Home";

export function getPrecoFormatado(preco = 0) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
}

type Props = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
  prato: Produto;
};
const Product = ({
  foto,
  preco,
  id,
  nome,
  descricao,
  porcao,
  prato,
}: Props) => {
  const [isClosed, setIsClosed] = useState(true);
  const dispatch = useDispatch();

  function getDescricao(descricao: string) {
    if (descricao.length > 132) {
      return descricao.slice(0, 132) + "...";
    }
  }

  const closeModal = () => {
    setIsClosed(true);
  };

  function addToCart() {
    dispatch(adicionar(prato));
    dispatch(abrir());
  }

  return (
    <>
      <Container>
        <li key={id}>
          <img src={foto} alt={nome} />
          <h3>{nome}</h3>
          <p>{getDescricao(descricao)}</p>
          <BtnDetails theme="bege" onClick={() => setIsClosed(false)}>
            Mais Detalhes
          </BtnDetails>
        </li>
      </Container>
      <ModalContainer className={`container ${isClosed ? "invisible" : ""}`}>
        <ModalContent>
          <div>
            <img src={foto} alt={nome} />
          </div>
          <Text>
            <div>
              <img src={closeIcon} onClick={() => closeModal()} />
              <h3>{nome}</h3>
              <p>{descricao}</p>
              <p>Serve: De {porcao}</p>
            </div>
            <div>
              <Button theme="bege" onClick={addToCart}>
                Adicionar ao carrinho - {getPrecoFormatado(preco).toString()}
              </Button>
            </div>
          </Text>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Product;
