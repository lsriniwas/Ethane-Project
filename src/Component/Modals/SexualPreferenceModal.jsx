
import React, { Component } from 'react'
import styled from "styled-components"
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import { DataContext } from '../../DataContextProvider/DataContextProvider';
export class SexualPreferenceModal extends Component {
           
       onChange=(e)=> {
        this.context.sexualOreint=e.target.value

      }
      handelPref=(e)=>{
        e.preventDefault();
        console.log(e,e.target.children.innerHTML)
}
        componentDidMount(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        render() {

        const ModalData=styled.div`

        text-align:left;
    
            .header{
            text-align:center;
            }

          div{
              border-bottom:1px solid #e8e8e8;
              padding:20px 10px;
          }  

                `


        const SexualPrefWrapper=styled.div`
             padding:5% 35.1% 5% 35.1%;
            
        ` 
        const Modal=styled.div`
            border-radius:10px;
            padding:20px;
             background-color:white;
            
        `
       
       const Button=styled.button`
       margin:10px 38px 0px 50px;
       border-radius:100px;
       padding:13px 22px;
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
            <SexualPrefWrapper>
                <Modal>
                 <h1>My sexual orientation is</h1>

                 <Radio.Group onChange={this.onChange} >
                    <ModalData>
                        <div>
                        <Radio.Button style={{width:"250px",fontSize:"15px",border:"0px"}} value="Straight">Straight</Radio.Button>
                        </div>
                    </ModalData>
                    <ModalData>
                        <div>
                        <Radio.Button  style={{width:"250px",fontSize:"15px",border:"0px"}} value="Gay">Gay</Radio.Button>
                        </div>
                    </ModalData>
                    <ModalData>
                        <div>
                        <Radio.Button  style={{width:"250px",fontSize:"15px",border:"0px"}} value="Lesbian">Lesbian</Radio.Button>
                        </div>
                    </ModalData>
                    <ModalData>
                        <div>
                        <Radio.Button  style={{width:"250px",fontSize:"15px",border:"0px"}} value="Bisexual">Bisexual</Radio.Button>
                        </div>
                    </ModalData>
                    
                    <ModalData>
                        <div>
                        <Radio.Button  style={{width:"250px",fontSize:"15px",border:"0px"}} value="Asexual">Asexual</Radio.Button>
                        </div>
                    </ModalData>
                    <ModalData>
                        <div>
                        <Radio.Button  style={{width:"250px",fontSize:"15px",border:"0px"}} value="Demisexual">Demisexual</Radio.Button>
                        </div>
                    </ModalData>
                    <ModalData>
                        <div>
                        <Radio.Button  style={{width:"250px",fontSize:"15px",border:"0px"}} value="Pansexual">Pansexual</Radio.Button>
                        </div>
                    </ModalData>
                     </Radio.Group>
                   
            <Button onClick={this.props.handleSexualPref}>CONTINUE</Button>
            </Modal>
            </SexualPrefWrapper>
        )
    }
}


SexualPreferenceModal.contextType=DataContext