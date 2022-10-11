import styled from "@emotion/styled";

export const SearchBarBox = styled.div`
  padding-top: 20px;
  
`;
export const Input = styled.input`
  /* width: 100%; */
  height: 30px;
  padding-left: 40px;
  padding-right: 10px;
  background-color: #fff;
  border: 1px solid rgba(237, 86, 190, 0.3);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(208, 119, 177, 0.15);
  outline: none;
  &:hover,
  &:focus {
    border-color: #9d4c92;
  }
`;

export const Button = styled.button`
   display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    background-color:white;
    width: 100px;
    height: 30px;
    margin-left: 10px;
    border-radius: 5px;
    border: solid #9d4c92;
    cursor: pointer;
    &:hover,
     &:focus{
        color: white;
        background-color:#9d4c92;
        transform: scale(1.1);
  
  }
`;

export const InputBox = styled.div`
    display: flex;
    align-items: center;
`;