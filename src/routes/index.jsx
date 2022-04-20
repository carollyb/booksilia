import { Routes, Route } from 'react-router-dom'
import CatalogPage from '../pages/Catalog';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';
import Home from '../pages/Home';
import UserData from '../pages/UserData';
import BookStock from '../pages/BookStock';

const Rotas = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/book' element={<CatalogPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/user' element={<UserData />} />
            <Route path='/stock' element={<BookStock />} />
        </Routes>
    );
}

export default Rotas;