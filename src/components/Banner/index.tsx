import { BannerContainer, TextContainer } from "./styles";

const Banner = () => {
  return (
    <BannerContainer>
      <div>
        <TextContainer className="container">
          <h2>Italiana</h2>
          <h2>La Dolce Vita Trattoria</h2>
        </TextContainer>
      </div>
    </BannerContainer>
  );
};

export default Banner;
