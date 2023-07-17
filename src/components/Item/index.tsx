import { Link } from "react-router-dom";

import Tag from "../Tag";
import Button from "../Button";
import { Content, ItemContainer, Tags } from "./styles";
import { HeaderItem } from "./styles";
import star from "../../assets/images/star.svg";

type Props = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
};
const Item = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
}: Props) => {
  function getDescricao(descricao: string) {
    if (descricao.length > 248) {
      return descricao.slice(0, 248) + "...";
    }
  }
  return (
    <ItemContainer>
      <img src={capa} alt={titulo} />
      <Tags>
        {destacado && <Tag>Destaque</Tag>}
        <Tag>{tipo}</Tag>
      </Tags>
      <Content>
        <HeaderItem>
          <h3>{titulo} </h3>
          <span>
            {avaliacao} <img src={star} alt="" />
          </span>
        </HeaderItem>
        <p>{getDescricao(descricao)}</p>
        <Link to={`/perfil/${id}`}>
          <Button theme="vermelho">Saiba Mais</Button>
        </Link>
      </Content>
    </ItemContainer>
  );
};

export default Item;
