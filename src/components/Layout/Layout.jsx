import { Outlet } from "react-router-dom";
import { NavItem } from './Layout.styled';


export const Layout = () => {
    return (
        <div>
            <nav>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/movies">Movies</NavItem>
            </nav>
            <Outlet />
        </div>
        
    );
};

