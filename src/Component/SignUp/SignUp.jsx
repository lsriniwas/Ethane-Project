import React, { Component } from 'react'
import styled from "styled-components"
import { DataContext } from '../../DataContextProvider/DataContextProvider'
import { IAgreeModal } from '../Modals/IAgreeModal'
import { PassionModal } from '../Modals/PassionModal'
import { SexualPreferenceModal } from '../Modals/SexualPreferenceModal'
import styles from "./SignUp.module.css"
import { SignUpNavbar } from './SignUpNavBar'
const SignUpWrapper=styled.div`
    ${props=>(
        props.modal?`height:100vh;
        overflow:hidden;`:` height:100%;
        overflow:none;`)}
        position:relative;
        padding:30px 300px;
    border:1px solid black;
`
const FormData=styled.div`
padding:20px;
`
const Modal=styled.div`
position:absolute;
height:110vh;
width:100%;
left:0;
top:0;

z-index:1000;
background-color:rgba(0,0,0,0.5)
`

const Footer=styled.div`
    padding:0px 300px;
    text-align:center;
`
const H2=styled.h3`
    color:#636e72;
    &:hover{
        color:#2d3436;
    }
`
const Button=styled.button`
        
    font-family: sans-serif;
    margin:0;
    border:2px solid #1f1f1f;
    padding: 14px 20px;
    font-weight: 400;
    border-radius: 5px;
    margin-right: 10px;
    background:#ffffff;
    margin-bottom: 5px;

    ${props=>props.man?` border:2px solid #fd5068 !important;
    color: #fd5068;`:``}

    ${props=>props.woman?` border:2px solid #fd5068 !important;
    color: #fd5068;`:``}

    ${props=>props.other?` border:2px solid #fd5068 !important;
    color: #fd5068;`:``}
   
`

export class SignUp extends Component {
        constructor(props){
            super(props)
            this.state={
                modal:true,
                first_name:"",
                email:"",
                gender:"",
                age:"",
                passions:"",
                sexual:"",
                imgSrc:"",
                dd:"",
                mm:"",
                yy:"",
                birthDay:"",
                man:false,
                woman:false,
                other:false,
                passionsModal:false,
                sexualModal:false
            }

            this.photo=React.createRef()

            
        }

        handleGender=(e)=>{
            e.preventDefault();

            this.setState({
                [e.target.name]:true
            })
             
            if(e.target.name!=="woman" && e.target.name!=="other"){
                this.setState({
                    woman:false,
                    other:false,
                    gender:"man",
                })
            }
            if(e.target.name!=="man" && e.target.name!=="woman"){
                this.setState({
                    woman:false,
                    man:false,
                    gender:"other"
                })
            }
            if(e.target.name!=="man" && e.target.name!=="other"){
                this.setState({
                    man:false,
                    other:false,
                    gender:"woman"
                })
            }
                // this.setState({

                // })

        }

        handleModal=()=>{
            this.setState({
                modal:false
            })
        }
      
        handleChange=(e)=>{
            const {name,value,type}=e.target
            const val=type==="file"? URL.createObjectURL(e.target.files[0]):value
            const {yy}=this.state
            this.setState({
                [name]:val,
                age:`${2020-Number(yy)}`
            })
        }

        handleFormData=(e)=>{
                e.preventDefault();
              
                const {first_name,gender,age,imgSrc,email} =this.state
               
                const payload={
                "username": "",
                "password": "",
                first_name,
                last_name:"",
                gender,
                email,
                age,
                imgSrc:[imgSrc],
                passions:this.context.passionList,
                sexual:this.context.sexualOreint,
                about:"",
                liked:[],
                location:"",
          }

       
          const {newUserData}=this.context

          newUserData({payload})

          const{history}=this.props
          history.push("/app/recs")
        
        
        }
        handlePassion=(e)=>{
                e.preventDefault();
                this.setState({
                    passionsModal:!this.state.passionsModal
                })
        }
        handleSexualPref=(e)=>{
            e.preventDefault();
            this.setState({
                sexualModal:!this.state.sexualModal
            })
    }
    render() {
        const styless={
            marginBottom:"40px"
        }
        const {modal,first_name,email,passionsModal,sexualModal,imgSrc,man,woman,other}=this.state
        const {handleModal}=this
        return (
            
            <SignUpWrapper modal={modal}>
                <SignUpNavbar/>
                  <FormData>
                     <form>
                         <div ><h1 className={styles.createAccount}>CREATE ACCOUNT</h1></div>
                         <div className={styles.tab}>
                             <div className={styles.data} >
                                 <label htmlFor="first_name">First Name</label>
                                 <div>
                                     <input className={styles.inputfield} value={first_name} type="text" onChange={this.handleChange} name="first_name" placeholder="First Name" id=""/>
                                 </div>
                             </div>
                             <div className={styles.data} >
                                 <label htmlFor="gender">Gender</label>
                                 <div className={styles.buttonFlex}>
                                    <div><Button className={styles.buttongender} name="man"  onClick={this.handleGender} man={man}>Man</Button></div>
                                    <div><Button className={styles.buttongender} name="woman" onClick={this.handleGender} woman={woman}>Woman</Button></div>
                                    <div><Button className={styles.buttongender} name="other"onClick={this.handleGender} other={other}>Other</Button></div>
                                 </div>
                                 <div>
                                     <input className={styles.checkbox} type="checkbox" name="" id=""/>
                                     <label htmlFor="">Show my gender on my profile</label>
                                 </div>
                             </div>
                         </div>
                         <div className={styles.tab}>
                             <div className={styles.data} >
                                 <label htmlFor="first_name">Email Address</label>
                                 <div>
                                     <input className={styles.inputfield} type="text" onChange={this.handleChange} name="email" value={email} placeholder="Email" />
                                 </div>
                             </div>
                             <div className={styles.data} >
                                 <label htmlFor="gender">Birthday</label>
                                 <div className={styles.buttonFlex}>
                                    <div><input className={styles.birthDay}  onChange={this.handleChange} name="mm" placeholder="MM"></input></div>
                                    <div><input className={styles.birthDay}  onChange={this.handleChange} name="dd" placeholder="DD"></input></div>
                                    <div><input className={styles.birthDay}  onChange={this.handleChange} name="yy"placeholder="YYYY"></input></div>
                                 </div>
                             </div>
                         </div>
                         <div className={styles.tab}>
                             <div className={styles.data} >
                                 <label htmlFor="first_name">Profile Photo</label>
                                 <div>
                                     <input ref={this.photo}  onChange={this.handleChange} name="imgSrc" type="file" />
                                     <div>
                                         {imgSrc && <img src={imgSrc} alt="icon" height="110px" style={{marginBottom:"10px"}}/>}
                                    </div>
                                 </div>
                             </div>
                         </div>
                         <div>
                             <div className={styles.optional}>
                                <div><hr/></div>
                                <div><h1 className={styles.optionalHeader}>Optional</h1></div>
                                <div><hr/></div>
                            </div>
                         </div>
                         <div >
                             <div className={styles.data} style={{...styless}}>
                                 <label htmlFor="passions">Passions</label>
                                 <div className={styles.buttonPas_Sex}>
                                   <button onClick={this.handlePassion} >+ Add Passions</button>
                                 </div>
                             </div>
                            
                         </div>
                         
                         <div className={styles.tab}>
                             <div className={styles.data} >
                                 <label htmlFor="sexual">Sexual Orientation</label>
                                 <div className={styles.buttonPas_Sex}>
                                     <button onClick={this.handleSexualPref}>+ Add Sexual Orientation</button>
                                 </div>
                             </div>
                             
                         </div>
                         <div className={styles.continue}>
                                <button onClick={this.handleFormData}>CONTINUE</button>
                         </div>
                     </form>
                  </FormData>
                  <Footer>
                    <H2>ALREADY HAVE AN ACCOUNT?LOG IN</H2>
                  </Footer>
                  {modal && (<Modal onClick={this.handleModal}>
                            <IAgreeModal handleModal={handleModal}/>
                  </Modal>)}
                  {
                    passionsModal &&  (<Modal >
                                <PassionModal handlePassion={this.handlePassion} />
                    </Modal>)
                  }
                  {
                      sexualModal &&  (<Modal >
                        <SexualPreferenceModal handleSexualPref={this.handleSexualPref} />
                     </Modal>)
                  }
            </SignUpWrapper>
        )
    }
}


SignUp.contextType=DataContext