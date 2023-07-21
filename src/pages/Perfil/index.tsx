import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Products from '../../components/Products'
import Loader from '../../components/Loader'

import {
  useGetProductQuery,
  useGetRestaurantBannerQuery
} from '../../services/api'

type ProductParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as ProductParams
  const { data: product } = useGetProductQuery(id)
  const { data: bannerInfo } = useGetRestaurantBannerQuery(id)

  return (
    <>
      <Header layout="perfil" />
      {bannerInfo ? (
        <Banner
          type={bannerInfo?.tipo}
          cover={bannerInfo?.capa}
          title={bannerInfo?.titulo}
        />
      ) : (
        <Loader />
      )}
      {product ? <Products dishes={product.cardapio} /> : <Loader />}
    </>
  )
}

export default Perfil
