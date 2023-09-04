import { Link } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import star from '../../assets/images/star.svg'
import * as S from './styles'

type Props = {
  id: number
  title: string
  highlighted: boolean
  type: string
  evaluation: number
  description: string
  cover: string
}
const Item = ({
  id,
  title,
  highlighted,
  type,
  evaluation,
  description,
  cover
}: Props) => {
  function getDescription(text: string) {
    if (text.length > 248) {
      return text.slice(0, 248) + '...'
    }
  }
  return (
    <S.ItemContainer>
      <img src={cover} alt={title} />
      <S.Tags>
        {highlighted && <Tag>Destaque</Tag>}
        <Tag>{type}</Tag>
      </S.Tags>
      <S.Content>
        <S.HeaderItem>
          <h3>{title} </h3>
          <span>
            {evaluation} <img src={star} alt="" />
          </span>
        </S.HeaderItem>
        <p>{getDescription(description)}</p>
        <Link to={`/perfil/${id}`}>
          <Button theme="normal">Saiba Mais</Button>
        </Link>
      </S.Content>
    </S.ItemContainer>
  )
}

export default Item
