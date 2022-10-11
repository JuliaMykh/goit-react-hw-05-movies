import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const Title = styled.h2`
    font-size: 28px;
    font-weight: 800;
    color: #740968;
`;

export const Link = styled(NavLink)`
  display: flex;
  width: 80px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-weight: 700;
  font-size: 20px;
  color: black;
  border: none;
  border-radius: 10%;
  margin-bottom: 10px;
  :hover:not(.active){
    color: #a04894; 
  }
    &.active {
    color: white;
    background-color: #9d4c92;
  } 
`;