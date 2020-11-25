import React, { Component } from "react";
import Styled from "styled-components";
import {LinksWithFooter} from "../Footer/Footer"
import {Header} from "../Footer/Header"
import {FooterContent} from "../Footer/Content"
import "antd/dist/antd.css";
import { Modal} from "antd";

const ToolBar = Styled.div`
background:white;
display:flex;
flex-direction:row-reverse;
z-index:1100;
top:0;
padding:0px 50px 20px 30px;
height:70px;
align-items:center;
width:100%;
​`;
const ColoredLine = Styled.div`

background-color:black;
height:2.5px;
padding:0.5px;
width:30px;
margin:4px;

`;
const Div = Styled.div`
float:left;

margin-right:10px;
`;


const Img = Styled.img`
margin-right:700px;
height:50px;
padding: 3px;
`;

class SignUpNavbar extends Component{
  
    state = {
        modalVisible: false,
    
      };
    
      setModalVisible=()=> {
        this.setState({ 
            modalVisible:true
        });
    }
        closeModal=()=>{
            this.setState({ 
                modalVisible:false
            }); 
        }
      
    render() {
        return (
            <div style={{position:"sticky",top:0}}>
                  <ToolBar>
                      
                      <Div onClick={this.setModalVisible} >
                        <ColoredLine></ColoredLine>
                        <ColoredLine></ColoredLine>
                        <ColoredLine></ColoredLine>
                      </Div>
                      <Modal
                    title= {<Header/>}
                    style={{ top:0 }}
                    visible={this.state.modalVisible}
                    onCancel={ this.closeModal}
                        footer = {<LinksWithFooter/>}
                    width={1200}
        
                  >
                    <FooterContent />
                    </Modal>
                      
                      <Img src = "https://cdn.worldvectorlogo.com/logos/tinder-wordmark-1.svg"/>
                      {/* <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/TinderLogo-2017.svg/1280px-TinderLogo-2017.svg.png" alt=""/> */}
                      {/* <Img src ="https://www.citypng.com/public/uploads/preview/-116006065101sllmxyokh.png" /> */}
                      
                  </ToolBar>
              
                
            </div>
        )
    }
}
export {SignUpNavbar}

