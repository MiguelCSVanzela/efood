import { BannerContainer, TextContainer } from "./styles";

type Props = {
  tipo: string;
  capa: string;
  titulo: string;
};
const Banner = ({ tipo, capa, titulo }: Props) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${capa})` }}>
      <div>
        <TextContainer className="container">
          <h2>{tipo}</h2>
          <h2>{titulo}</h2>
        </TextContainer>
      </div>
    </BannerContainer>
  );
};

export default Banner;
