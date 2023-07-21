import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux/es/exports'

import Footer from './components/Footer'
import Paths from './routes'
import Cart from './components/Cart'

import { store } from './store'

import { GlobalStyle } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Paths />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
