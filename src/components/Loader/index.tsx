import { PropagateLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PropagateLoader color={colors.salmon} />
    </Container>
  )
}

export default Loader
