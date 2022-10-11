import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const MovieBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
`;

export const MovieInform = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const GoBackLink = styled(NavLink)`
   display: flex;
  width: 80px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-weight: 700;
  font-size: 16px;
  color: black;
  border: none;
  border-radius: 10%;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    color: white;
    background-color: #9d4c92;
  } 
`;

export const MovieImg = styled.img`
  display: block;
  margin-right: 20px;
`;

export const MovieTitle = styled.h2`
    font-size: 24px;
    font-weight: 800;
    color: #f00ad9;
`;
export const MovieGenres = styled.p`
    font-size: 18px;
    font-weight: 700;
  margin-bottom: 10px;
  color: #740968;
`;

export const MovieOverview = styled.p`
    font-size: 22px;
    margin-bottom: 10px;
   `;

export const MovieVote = styled.p`
     font-size: 16px;
    font-weight: 700;
    color: #740968;
    margin-bottom: 3px;
`;

export const MovieAverage = styled.span`
     font-size: 16px;
    font-weight: 500;
    color: #f612d8;
    `;
