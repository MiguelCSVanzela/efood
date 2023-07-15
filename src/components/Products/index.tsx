import Product from "../Product";
import { ProductContainer } from "./styles";
import ProductClass from "../../models/Product";

export type Props = {
  products: ProductClass[];
};
const Products = ({ products }: Props) => {
  return (
    <div className="container">
      <ProductContainer>
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </ProductContainer>
    </div>
  );
};

export default Products;
