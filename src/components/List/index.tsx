import Item from '../Item'

import { ListContainer } from './styles'

type Props = {
  restaurants: Restaurante[]
}

const List = ({ restaurants }: Props) => {
  return (
    <ListContainer>
      <div className="container">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Item
              id={restaurant.id}
              title={restaurant.titulo}
              highlighted={restaurant.destacado}
              type={restaurant.tipo}
              description={restaurant.descricao}
              evaluation={restaurant.avaliacao}
              cover={restaurant.capa}
            />
          </li>
        ))}
      </div>
    </ListContainer>
  )
}

export default List
