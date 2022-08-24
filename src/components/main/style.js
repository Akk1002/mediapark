import styled from "styled-components";

import { Link } from 'react-router-dom';



const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
`;
const Card = styled.div`
  padding: 20px;
  border: 2px solid #f4f4f4;
  width: 200px;
  height: 300px;
  img {
    width: 150px;
    height: 150px;
  }

  button {
    text-decoration: none;
    width: 150px;
    height: 40px;
    border:none;
    background: #f4f4f4;
    color:red;
  }
  :hover{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    button{

      background: red;
      color:white;
    }
  }
`;
const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

export { Info, Card, CardTitle,StyledLink };
