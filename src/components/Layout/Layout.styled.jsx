import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
  
  width: 80px;
  color: black;
  font-weight: 800;
  font-size: 20px;
  padding: 10px;
  border-radius: 10%;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;

  :hover:not(.active){
    color: #a04894; 
  }
  &.active {
    color: white;
    background-color: #9d4c92;

  }
`;

export const Container = styled.div`
  padding: 40px 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
  margin-bottom: 20px;
  
`;