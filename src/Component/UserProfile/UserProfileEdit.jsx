import React, { Component } from 'react'
import { DataContext } from '../../DataContextProvider/DataContextProvider'
import { PositionCarouselDemo } from './CardFunction'
import styled from "styled-components"

const UserEditCard=styled.div`
margin:4% 33%;
width:375px;
height:620px;
overflow:scroll;
border-radius:5px;
box-shadow: 0 5px 13px 1px rgba(0,0,0,.09);
padding:0;
text-align:left;

    

::-webkit-scrollbar {width: 0px; height: 0px; background: none; }
::-webkit-scrollbar-thumb { background-color: #000000 }

    textarea {
        outline:none;
        border:none;
        ::-webkit-scrollbar {width: 0px; height: 0px; background: none; }
        ::-webkit-scrollbar-thumb { background-color: #000000 }

  `
        const Grey=styled.div`
        
        label{
            font-size:16px;
             width:372px;
            font-family:sans-serif;
            background:#F5F7FA;
            padding:8px 5px;
            outline:none;
        }

        input{
            padding:15px 5px;
            width:372px;
            border:none;
            outline:none;

        }
        
`
        const White=styled.div`
        
        label {
            font-size:16px;
             width:372px;
            font-family:sans-serif;
            outline:none;

            background:#F5F7FA;
            padding:8px 5px;
        }
        input{
            padding:15px 5px;
            width:372px;
            border:none;
            outline:none;

        }
        `

export class UserProfileEdit extends Component {


        handleGoback=()=>{
            
            const {handleMoreInfo}=this.context
            handleMoreInfo()
            const{history}=this.props
            history.replace("/app/profile")
        }
    render() {
        const {presentUser}=this.context
        return (
            <>
                <UserEditCard>

                        <Grey>
                            <div>
                                <label htmlFor="about">ABOUT USER</label>
                            </div>
                            <div>
                                <textarea name="about" style={{width:"375px",height:"86px !important",overflow:"scroll"}} ></textarea>
                            </div>
                        </Grey>
                        <White>
                            <div>
                                <label htmlFor="about">PASSIONS</label>(separate by commas)
                            </div>
                            <div>
                            <input type="text" name="" id="" placeholder="Passions"/>
                            </div>
                        </White>
                        <Grey>
                            <div>
                                <label htmlFor="about">LIVING IN</label>
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="Living In"/>
                            </div>
                        </Grey>
                        <White>
                            <div>
                                <label htmlFor="about">GENDER</label>
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="Gender"/>
                            </div>
                        </White>
                        <Grey>
                            <div>
                                <label htmlFor="about">SCHOOL</label>
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="School"/>
                            </div>
                        </Grey>
                        <White>
                            <div>
                                <label htmlFor="about">CHOOSE INSTAGRAM PHOTOS</label>
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="Select"/>
                            </div>
                        </White>
                        <Grey>
                            <div>
                                <label htmlFor="about">JOB TITLE</label>
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="Job Title"/>
                            </div>
                        </Grey>
                        <White>
                            <div>
                                <label htmlFor="about">SEXUAL ORIENTATION</label>
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="Select"/>
                            </div>
                        </White>
                    <button onClick={this.handleGoback} style={{position:"sticky"}}>goback</button>
                                 
                </UserEditCard>
                           
            </>
        )
    }
}


UserProfileEdit.contextType=DataContext