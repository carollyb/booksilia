import { BrowserRouter } from 'react-router-dom';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import Rotas from './routes';

function App() {
  
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Rotas />
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
