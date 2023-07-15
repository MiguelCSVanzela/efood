import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import ProductClass from "../../models/Product";

import pizza from "../../assets/images/pizza.png";

const produtos: ProductClass[] = [
  {
    id: 1,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
  {
    id: 2,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
  {
    id: 3,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
  {
    id: 4,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
  {
    id: 5,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
  {
    id: 6,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
];

const Perfil = () => {
  return (
    <>
      <Header layout="perfil" />
      <Banner />
      <Products products={produtos} />
    </>
  );
};

export default Perfil;
