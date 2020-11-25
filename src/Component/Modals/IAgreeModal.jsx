import React, { Component } from 'react'
import styled from "styled-components"
import tindericon from "../../Images/tindericon.png"
import tick from "../../Images/tick.png"
import { Link } from 'react-router-dom'

export class IAgreeModal extends Component {
 
    
    render() {
        const AgreeWrapper=styled.div`
             padding:5% 35.1% 5% 35.1%;
            
        ` 
        const ModalData=styled.div`

            text-align:left;
        
            .header{
            text-align:center;
                }
        `
        const Modal=styled.div`
            border-radius:10px;
            padding:20px;
             background-color:white;
            
        `
       const P =styled.p`
            letter-spacing:2px;
       `
       const Button=styled.button`
       margin:10px 38px 0px 50px;
       border-radius:100px;
       padding:15px 24px;
       width:315px;
       outline:none;
       color:white;
       border:0px;
       font-weight:700;
       background: linear-gradient(262deg, #ff7854, #fd267d);
       background-image: linear-gradient(262deg, rgb(255, 120, 84), rgb(253, 38, 125));
       &:hover {
       background: linear-gradient(262deg, #fd267d,#ff7854);
       background-image: linear-gradient(262deg,  rgb(253, 38, 125)rgb(255, 120, 84));
       }

       `

       
        return (
            <AgreeWrapper>
                <Modal>
                    <ModalData>
                            <div className="header">
                                <img src={tindericon} width="26.1px" alt=""/>
                                <h2 style={{fontWeight:700}}>Welcome to Tinder</h2>
                                <P>Please follow these house rules</P>
                            </div>
                    </ModalData>
                    <ModalData>
                        <div>
                            <div style={{display:"flex"}}>
                            <img src={tick} style={{margin:"5px 5px 0px 0px"}} height="17.5px" alt=""/>
                            <h3 style={{fontFamily:"sans-serif",fontWeight:700}}>Be Yourself</h3>
                            </div>
                           <p style={{fontSize:"18px"}}>Make sure your photos, age, and bio are true to who you are.</p>
                        </div>
                    </ModalData>
                    <ModalData>  <div>
                            <div style={{display:"flex"}}>
                            <img src={tick} style={{margin:"5px 5px 0px 0px"}} height="17.5px" alt=""/>
                            <h3 style={{fontFamily:"sans-serif",fontWeight:700}}>Stay safe</h3>
                            </div>
                           <p style={{fontSize:"18px"}}>Don't be too quick to give out personal information.
                           <Link style={{color:"#fd5068"}}>Date Safely</Link></p>
                        </div>
                    </ModalData>
                    <ModalData>  <div>
                            <div style={{display:"flex"}}>
                            <img src={tick} style={{margin:"5px 5px 0px 0px"}} height="17.5px" alt=""/>
                            <h3 style={{fontFamily:"sans-serif",fontWeight:700}}>Play it cool</h3>
                            </div>
                           <p style={{fontSize:"18px"}}>Respect others and treat them as you like to be treated.</p>
                        </div>
                    </ModalData>
                    <ModalData>  <div>
                            <div style={{display:"flex"}}>
                            <img src={tick} style={{margin:"5px 5px 0px 0px"}} height="17.5px" alt=""/>
                            <h3 style={{fontFamily:"sans-serif",fontWeight:700}}>Be Proactive</h3>
                            </div>
                           <p style={{fontSize:"18px"}}>Always report bad behaviour.</p>
                        </div>
                    </ModalData>
                    <ModalData><Button className="header" onClick={this.props.handleModal}>I AGREE</Button></ModalData>
                </Modal>
            </AgreeWrapper>
        )
    }
}
