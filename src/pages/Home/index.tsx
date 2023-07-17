import Header from "../../components/Header";
import List from "../../components/List";
import { useEffect, useState } from "react";
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
  const [restaurante, setRestaurante] = useState<Restaurante[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((reponse) => reponse.json())
      .then((responseJson) => setRestaurante(responseJson));
  }, []);

  return (
    <>
      <Header layout="home" />
      <List restaurantes={restaurante} />
    </>
  );
};

export default Home;
