import Header from "../../components/Header";
import List from "../../components/List";
import { useGetFeaturedRestaurantsQuery } from "../../services/api";
export interface Produto {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}
export type Restaurante = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Produto[];
};

const Home = () => {
  const { data: restaurante } = useGetFeaturedRestaurantsQuery();
  if (restaurante) {
    return (
      <>
        <Header layout="home" />
        <List restaurantes={restaurante} />
      </>
    );
  }
  return <h3>Carregando...</h3>;
};

export default Home;
