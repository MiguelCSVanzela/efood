import Header from "../../components/Header";
import List from "../../components/List";
import ListClass from "../../models/List";
import sushi from "../../assets/images/sushi.png";
import trattoria from "../../assets/images/trattoria.png";

const lista: ListClass[] = [
  {
    id: 1,
    infos: [true, "Japones"],
    image: sushi,
    title: "Hioki Sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    rate: 4.9,
  },
  {
    id: 2,
    infos: [false, "italiana"],
    image: trattoria,
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: 4.6,
  },
  {
    id: 3,
    infos: [true, "italiana"],
    image: trattoria,
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: 4.6,
  },
  {
    id: 4,
    infos: [false, "japonesa"],
    image: sushi,
    title: "Hioki Sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    rate: 4.9,
  },
  {
    id: 5,
    infos: [false, "japonesa"],
    image: sushi,
    title: "Hioki Sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    rate: 4.9,
  },
  {
    id: 6,
    infos: [false, "italiana"],
    image: trattoria,
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: 4.6,
  },
];
const Home = () => {
  return (
    <>
      <Header layout="home" />
      <List list={lista} />
    </>
  );
};

export default Home;
