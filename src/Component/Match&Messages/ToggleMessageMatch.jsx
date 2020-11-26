import Styled, { ThemeConsumer } from "styled-components"
import React from "react";
import likesmessages from "../../Images/likesmessages.PNG"
import messages from "../../Images/messages.png"

const Button = Styled.button`
width:100px;

padding:4px;
margin-top:3px;
padding-top:6px;
font-size:14px;
font-weight:500;
color:black;
background-color:white;
border:0px;
outline:none;
padding-top:2px;
padding-bottom:2px;
text-align:center;
`;

const Img = Styled.img`
width:100%;
`;

class SwitchTab extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showMessageTab:false
        }
        this.handleMatchTab = this.handleMatchTab.bind(this)
        this.handleMessageTab = this.handleMessageTab.bind(this)
       
    }
    handleMessageTab(){
        this.setState({
            showMessageTab:true
        })
    }

    handleMatchTab(){
        this.setState({
            showMessageTab:false
        })
    }

    render(){
            const {showMessageTab} = this.state
        return(
                <> 
                <div style = {{display:"flex",justifyContent:"flex-start",marginLeft:"12px"}}>
                    <Button
                    onClick = {this.handleMatchTab}>Matches</Button>
                    <Button
                    onClick = {this.handleMessageTab}>Messages</Button>
                </div>

                {showMessageTab ? (
                    <>
                    <Img src = {messages} alt = "show MAtches" />
                    </>
                ) :(
                    <>
                     <Img src ={likesmessages} alt = "show Messages" />
                    </>
                )}
                 </>
        )
    }
}
export {SwitchTab}