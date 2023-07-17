import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import { Produto, Restaurante } from "../Home";

const Perfil = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState<Produto[]>();
  const [bannerInfo, setBannerInfo] = useState<Restaurante>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((responseJson) => setProduto(responseJson.cardapio));
  }, [id]);
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((responseJson) => setBannerInfo(responseJson));
  }, [id]);
  if (!produto) return <h3>Carregando...</h3>;
  if (!bannerInfo) return <h3>Carregando...</h3>;
  return (
    <>
      <Header layout="perfil" />
      <Banner
        tipo={bannerInfo?.tipo}
        capa={bannerInfo?.capa}
        titulo={bannerInfo?.titulo}
      />
      <Products pratos={produto} />
    </>
  );
};

export default Perfil;
