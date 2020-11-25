import React, { Component } from "react";
import Styled from "styled-components";


const Navbar = Styled.div`
display:flex;
justify-content:space-between;
background-color:white;`

const StyleButton = Styled.button`
padding:10px 20px ;
text-align:center;
border:0px;
margin-right:30px;
margin-top:5px;
min-width:80px;
color:white;
border-radius:5px;
background: linear-gradient(262deg, #FF7854, #FD267D);
background-image: linear-gradient(262deg, rgb(255, 120, 84), rgb(253, 38, 125));
font-weight: bold;

`;
const Img = Styled.img`
width:100px;
padding: 3px;
`;

class Header extends Component{

    render(){
        return(
            <div>
                <Navbar>
                    
                    <Img src = "https://cdn.worldvectorlogo.com/logos/tinder-wordmark-1.svg"/>
                    <StyleButton>LOG IN</StyleButton>
               </Navbar>
            </div>
        )
    }

}
export {Header}