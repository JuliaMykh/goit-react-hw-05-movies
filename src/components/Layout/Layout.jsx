import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import { NavItem, Container, Header } from './Layout.styled';
import Loader from "components/Loader/Loader";

const Layout = () => {
    return (
        <Container>
            <Header>
            <nav>
                <NavItem to="/" end>Home</NavItem>
                <NavItem to="/movies">Movies</NavItem>
                </nav>
            </Header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
        
    );
};

export default Layout;
