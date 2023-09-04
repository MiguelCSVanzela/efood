import { PropagateLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PropagateLoader color={colors.sky} />
    </Container>
  )
}

export default Loader
