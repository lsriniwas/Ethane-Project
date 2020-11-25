import React, { Component } from "react";
import Styled from "styled-components";
import {LinksWithFooter} from "./Footer/Footer"
import {Header} from "./Footer/Heder"
import {FooterContent} from "./Footer/Content"
import "antd/dist/antd.css";
import { Modal,Button} from "antd";

const ToolBar = Styled.div`
    display:flex;
    position:relative;
    flex-direction:row-reverse;
    top:0
    left:20px;
    
    height:70px;
    align-items:center;
    width:100%;
​`;
const ColoredLine = Styled.div`

background-color:white;
height:1.5px;
width:20px;
margin:3px;

`;
const Div = Styled.div`
float:left;

margin-right:10px;
`;

const StyleButton = Styled.button`
padding:7px;
text-align:center;
border:0px;
margin-right:30px;
min-width:100px;
color:#fd5068;
border-radius:5px;
background-color:white;
font-weight: bold;
&:hover {
    background: linear-gradient(262deg, #FD267D,#FF7854);
    background-image: linear-gradient(262deg,  rgb(253, 38, 125)rgb(255, 120, 84));
    color:white;
    }
`;
const Img = Styled.img`
margin-right:900px;
height:80px;
padding: 3px;
`;

class Navbar extends Component{
  
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
            <div>
                
               
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
                      <div>
                          <StyleButton>Log in</StyleButton>
                      </div>
                      <Img src ="https://www.citypng.com/public/uploads/preview/-116006065101sllmxyokh.png" />
                      
                  </ToolBar>
              
                
            </div>
        )
    }
}
export {Navbar}
