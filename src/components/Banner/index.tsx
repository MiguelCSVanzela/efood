import { BannerContainer, TextContainer } from './styles'

type Props = {
  type: string
  cover: string
  title: string
}

const Banner = ({ type, cover, title }: Props) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${cover})` }}>
      <div>
        <TextContainer className="container">
          <h2>{type}</h2>
          <h2>{title}</h2>
        </TextContainer>
      </div>
    </BannerContainer>
  )
}

export default Banner
