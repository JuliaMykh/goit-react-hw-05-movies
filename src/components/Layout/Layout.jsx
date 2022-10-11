import { Outlet } from "react-router-dom";
import { NavItem, Container, Header } from './Layout.styled';

export const Layout = () => {
    return (
        <Container>
            <Header>
            <nav>
                <NavItem to="/" end>Home</NavItem>
                <NavItem to="/movies">Movies</NavItem>
                </nav>
            </Header>
            
            <Outlet />
        </Container>
        
    );
};

