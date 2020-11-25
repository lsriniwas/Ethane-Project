import React, { Component } from 'react'
import styled from "styled-components"
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { DataContext } from '../../DataContextProvider/DataContextProvider';
export class PassionModal extends Component {
 
     handleChange=(value)=> {
         this.context.passionList=value;
      }

      componentDidMount(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
      }

    render() {
        const { Option } = Select;

        const PassionWrapper=styled.div`
             padding:5% 35.1% 5% 35.1%;
                height:100vh;
                overflow:hidden;

            
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
       const Span=styled.span`
       padding:10px;
`
       
      
 
        return (
            <PassionWrapper>
                <Modal>
            <h1>Passions</h1>
                   <P>Let everyone know what you're passionate about by adding it to your profile.</P> 
        <Select
            mode="multiple"
            style={{ width: '100%' ,border:"none"}}   
           
            onChange={this.handleChange}
            optionLabelProp="label"
        >
            <Option value="yoga" label="yoga">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="yoga">
               Yoga
                </Span>
               
            </div>
            </Option>
            <Option value="art" label="art">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="art">
               Art
                </Span>
               
            </div>
            </Option>
            <Option value="surfing" label="surfing">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="surfing">
               Surfing
                </Span>
                
            </div>
            </Option>
            <Option value="ntw" label="ntw">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="ntw">
               New in Town
                </Span>
            </div>
            </Option>
            <Option value="running" label="running">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="running">
              Running
                </Span>
            </div>
            </Option> <Option value="cricket" label="cricket">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="cricket">
              Cricket
                </Span>
            </div>
            </Option> <Option value="picknic" label="picknic">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="picknic">
              Picnicking
                </Span>
            </div>
            </Option> <Option value="kpop" label="kpop">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="kpop">
               K-Pop
                </Span>
            </div>
            </Option> <Option value="golf" label="golf">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="golf">
              Golf
                </Span>
            </div>
            </Option>
            <Option value="comedy" label="comedy">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="comedy">
               Comedy
                </Span>
            </div>
            </Option>
            <Option value="movies" label="movies">
            <div className="demo-option-label-item">
                <Span role="img" aria-label="movies">
              Movies
                </Span>
            </div>
            </Option>
            </Select>,


                        <Button onClick={this.props.handlePassion}>Continue</Button>
                        </Modal>
            </PassionWrapper>
        )
    }
}


PassionModal.contextType=DataContext