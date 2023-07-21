import Loader from '../Loader'
import Product from '../Product'

import { ProductContainer } from './styles'

type Props = {
  dishes: Produto[]
}

const Products = ({ dishes }: Props) => {
  if (!dishes)
    return (
      <h3>
        <Loader />
      </h3>
    )
  return (
    <div className="container">
      <ProductContainer>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Product
              id={dish.id}
              cover={dish.foto}
              name={dish.nome}
              description={dish.descricao}
              portion={dish.porcao}
              price={dish.preco}
              dish={dish}
            />
          </li>
        ))}
      </ProductContainer>
    </div>
  )
}

export default Products
