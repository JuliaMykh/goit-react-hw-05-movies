import styled from "@emotion/styled";

export const CastLst = styled.ul`
    
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 40px) / 2);
  text-align: center;
`;

export const CastImg = styled.img`
  display: block;
  width: 100%;
`;

export const CastName = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;

export const CastSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
