import Button from "../Button";
import { Container } from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
};
const Product = ({ image, title, description }: Props) => {
  return (
    <Container>
      <img src={image} alt="pizza" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button theme="bege">Adicionar ao carrinho</Button>
    </Container>
  );
};

export default Product;
