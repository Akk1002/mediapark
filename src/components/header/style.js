import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const Conteiner = styled.div`
margin:0 auto;  
width: 100%;
background: red;

`;
const NavLinkstyle = styled(NavLink)`
    font-weight:900;
        border-radius: 5px;
        color:blue;
        background-color: white;
        padding: 5px 10px;
        span{
            color:red;
        }

`;


const HeadeR = styled.div`

    color:white;
    width: 1440px;
    margin:0 auto;
    padding:0 20px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content:space-around;
    gap:20px;
    
input{
    box-sizing:border-box;
    padding: 20px;
    height: 35px;
    width: 500px;
}
`;
const Dropdown = styled.div`
position: relative;
    display: inline-block;
    button{
        display: flex;
        align-items: center;
        font-size: 18px;
        height: 37px;
        width: 160px;
        background: #fff;
        border:none;
        img{
            margin-right: 5px;
        width: 30px;
        height: 30px;
    }
    }
`;
const MyDropdown = styled.div`
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;
const Link = styled.a`
color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 16;
`;

const LogIn = styled.div`
display: flex;
align-items: center;
    img{
        width: 30px;
        height: 30px;
        margin-right: 5px;
    }
`;




export {HeadeR,Dropdown,MyDropdown,Link,Conteiner,NavLinkstyle,LogIn,}
