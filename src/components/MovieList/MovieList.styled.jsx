import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


export const MovieList = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
  
`;

export const MovieItem = styled.li`
font-size: 20px;
  font-weight: 500;
  padding: 2px;
`;

export const Link = styled(NavLink)`
  color: black;
  &:hover,
  &:focus {
    color: #a04894;
    font-weight: 700;
  }
`;