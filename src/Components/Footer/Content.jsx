
import React from "react"
import Styled from "styled-components";


const SubHeading = Styled.div`
margin:2px;
margin-left:50px;
font-size:11px;
color:grey;
font-weight:bold;`;


const Head = Styled.div`
margin:2px;
margin-left:50px;
font-weight:bold;
font-size:10px;
color:black;
`

const InfoBox = Styled.div`
height:200px;

margin:5px;
width:200px;
cursor:pointer;
color:grey;
&:hover {
    color:#ff7979;
    }

`;
const Container = Styled.div`
display:flex;
justify-content:space-around;
height:200px;`
const H =  Styled.h2`
transform: skew(-12deg);`;
class FooterContent extends React.Component{
constructor(props){
    super(props)
}
    render(){
        return(
            <div style = {{padding:"15px"}}>
                <Head>LANGUAGE</Head>
                <SubHeading>ENGLISH</SubHeading>
                <Container>
                <InfoBox>
                    <H>COMPANY</H>
                    <div>Jobs</div>
                    <div>Contact</div>
                    <div>Security</div>
                </InfoBox>
                <InfoBox>
                <H>COMMUNITY</H>
                    <div>Blog</div>
                    <div>Tech Blog</div>
                    <div>Press</div>
                    <div>Support</div>
                    <div>Promo Code</div>
                </InfoBox>
                <InfoBox>
                    <H>PARTNERS</H>
                <div>Hey! Vina</div>
                    <div>Spotify</div>
                </InfoBox>
                 <InfoBox>
                 <H>LEGAL</H>
                <div>Privacy</div>
                    <div>Terms</div>
                    <div>Cookie Policy</div>
                    <div>Safety & Policy Center</div>
                    
                   
                    <div>Safety Tips</div>
                    <div>Community Guidelines</div>
                    <div>Intellectual  Property</div>

                 </InfoBox>
                </Container>
               
            </div>
        )
    }
   
}
export {FooterContent}