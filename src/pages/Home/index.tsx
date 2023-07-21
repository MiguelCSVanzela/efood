import Header from '../../components/Header'
import List from '../../components/List'
import Loader from '../../components/Loader'

import { useGetFeaturedRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurant } = useGetFeaturedRestaurantsQuery()
  if (restaurant) {
    return (
      <>
        <Header layout="home" />
        <List restaurants={restaurant} />
      </>
    )
  }
  return <Loader />
}

export default Home
