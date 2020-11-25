
import React from "react"
import Styled from "styled-components";

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


const Img = Styled.img`
height:50px`;

const Wrapper = Styled.div`
display:flex;

justify-content:space-around;
`;
const SocialMediaIcons = Styled.div`
display:flex;
justify-content:space-around;
width:600px;
heigth:100px;`;
const Span = Styled.span`
margin-left:400px;
color:grey;
margin-top:2px;
font-size:12px;`;
const Head = Styled.div`
font-size:18px;
transform: skew(-12deg);
color:black;
padding-top:5px;
margin-left:30px
font-family: 'Cantarell', sans-serif;`;

class LinksWithFooter extends React.Component{
constructor(props){
    super(props)
}
    render(){
        return(
            
        <Wrapper>
          <SocialMediaIcons>
              <Head>
                  GET THE APP!
              </Head>
              <Img src  = "https://lh3.googleusercontent.com/proxy/a7uciZVzs7SsMQBVD5N_ATWtgrW6sGTCN_TbERUlDEHorPNHKId3C6Zz0sLei_SE5kHaXLwOUVJTy7eI8h7wPzHsK_J0leqs7cIUP5dsTkOG5DP60DVb75vYCJaX_gvkVQ"/>
              <Img src  = "https://cdn.androidbeat.com/wp-content/uploads/2017/05/New-Play-Store-logo.png"/>
             
        
              
              <Head>
                  STAY SOCIAL
              </Head>
              <Img src  = "https://i.pinimg.com/originals/1f/3a/6c/1f3a6cc746ca032805bd9a641b311bbf.jpg"/>
              <Img src  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOybrkzkZxfa5YLegX4v5NCB1ELF9FAHN-g&usqp=CAU"/>
              <Img src  = "https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png"/>
              <Img src  = "https://icons-for-free.com/iconfiles/png/512/videos+watch+website+youtube+icon-1320168606023940607.png"/>
        
          </SocialMediaIcons>
          <SocialMediaIcons>
              <Span>Privacy Settings</Span>
          </SocialMediaIcons>
        </Wrapper>
        )
    }
   
}
export {LinksWithFooter}