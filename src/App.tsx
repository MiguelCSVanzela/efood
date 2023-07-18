import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Provider } from "react-redux/es/exports";
import { store } from "./store";

import Footer from "./components/Footer";
import Rotas from "./routes";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
