import Header from './header/Header';
import Footer from './footer/Footer';
import { useLocation, Outlet } from 'react-router-dom';
import Home from '../pages/home/Home'

function Layout() {
    const { pathname } = useLocation();

    return (
        <>
            <Header />
            { pathname === '/' ? <Home /> : <Outlet /> }
            <Footer />
        </>
    )
}

export default Layout;