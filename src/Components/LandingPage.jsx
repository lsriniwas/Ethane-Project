import React, { Component } from 'react'


import styled from "styled-components"
import { LoginModals } from './Modals/LoginModals'
import {Navbar} from "./Navbar"

const BackgroundWrapper=styled.div`

background-image:url("https://tinder.com/static/build/m/b07fe760ab4714aa3e932a15657494e5.webp");
background-size: cover;
bottom :0px;
height :100vh;
position:relative;
top :0px;
width: 100%;
`


const Div=styled.div`
background: rgba(0, 0, 0, 0.3);
background-color: rgba(0, 0, 0, 0.3);
width: 100%;
height:100%;
margin: 0;
margin-top: 0px;
`
const Divgap = styled.div`
height:200px;

`
const Head = styled.h1`
display:flex;
justify-content:center;
font-size:100px;
color:white;
height:140px;
width:600px;
font-weight: 700;
margin:auto;
`;
const Button = styled.div`
width:240px;
height:45px;
display:flex;
justify-content:center;

margin:auto;
padding:8px 18px;
font-size:16px;
font-weight:light;
border-radius:20px;
color:white;
outline:none;
color:white;
border:0px;
font-family
background: linear-gradient(262deg, #FF7854, #FD267D);
background-image: linear-gradient(262deg, rgb(255, 120, 84), rgb(253, 38, 125));
&:hover {
background: linear-gradient(262deg, #FD267D,#FF7854);
background-image: linear-gradient(262deg,  rgb(253, 38, 125)rgb(255, 120, 84));
}

`;
const Footer = styled.div`
display:flex;
position:relative;
flex-direction:row-reverse;
bottom:0;
margin-top:130px;

color:white;
font-size:12px;
`

export class LandingPage extends Component {
   
    render() {
        return (
            <div>

           
            <BackgroundWrapper> 
               
                   <Div>
                   <Navbar />
                   <Divgap></Divgap>
                       <Head>Swipe Right® </Head>
                     {/* <Button >CREATE ACCOUNT</Button>  */}
                     <LoginModals />
                     <Footer>
                   <div>All photos of models and used for illustrative purpose only</div>
               </Footer>
                   </Div>

                  
            </BackgroundWrapper> 
            
            
            </div>
        )
    }
}
