import { BrowserRouter } from 'react-router-dom';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import Main from './routes';

function App() {
  
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Main />
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
