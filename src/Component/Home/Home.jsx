import React, { Component } from 'react'


import styled from "styled-components"
import { LoginModals } from '../Modals/LoginModals'
import {Navbar} from "../Navbar/Navbar"

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
width:700px;
font-weight: 700;
margin:auto;
margin-bottom:70px;
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

export class Home extends Component {
   
    render() {
        const {history}=this.props
        return (
            <div>

           
            <BackgroundWrapper> 
               
                   <Div>
                   <Navbar />
                   <Divgap></Divgap>
                       <Head>Swipe Right® </Head>
                     {/* <Button >CREATE ACCOUNT</Button>  */}
                     <LoginModals history={history} />
                     <Footer>
                   <div>All photos of models and used for illustrative purpose only</div>
               </Footer>
                   </Div>

                  
            </BackgroundWrapper> 
            
            
            </div>
        )
    }
}
