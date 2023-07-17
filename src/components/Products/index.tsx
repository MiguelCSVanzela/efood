import Product from "../Product";
import { ProductContainer } from "./styles";
import { Produto } from "../../pages/Home";
type Props = {
  pratos: Produto[];
};

const Products = ({ pratos }: Props) => {
  if (!pratos) return <h3>Carregando...</h3>;
  return (
    <div className="container">
      <ProductContainer>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <Product
              id={prato.id}
              foto={prato.foto}
              nome={prato.nome}
              descricao={prato.descricao}
              porcao={prato.porcao}
              preco={prato.preco}
            />
          </li>
        ))}
      </ProductContainer>
    </div>
  );
};

export default Products;
