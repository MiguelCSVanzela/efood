import Tag from "../Tag";
import Button from "../Button";
import { Content, ItemContainer, Tags } from "./styles";
import star from "../../assets/images/star.svg";
import { HeaderItem } from "./styles";

type Props = {
  infos: [boolean, string];
  image: string;
  title: string;
  description: string;
  rate: number;
};
const Item = ({ infos, image, title, description, rate }: Props) => {
  return (
    <ItemContainer>
      <img src={image} alt="Prato com sushi" />
      <Tags>
        {infos[0] === true ? (
          <>
            <Tag>Destaque</Tag>
            <Tag>{infos[1]}</Tag>
          </>
        ) : (
          <Tag>{infos[1]}</Tag>
        )}
      </Tags>
      <Content>
        <HeaderItem>
          <h3>{title} </h3>
          <span>
            {rate} <img src={star} alt="" />
          </span>
        </HeaderItem>

        <p>{description}</p>
        <Button theme="vermelho">Saiba Mais</Button>
      </Content>
    </ItemContainer>
  );
};

export default Item;
