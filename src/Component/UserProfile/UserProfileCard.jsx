import React, { Component } from 'react'
import styled from "styled-components"
import { DataContext } from '../../DataContextProvider/DataContextProvider'
import { PositionCarouselDemo } from './CardFunction'
import { UserProfileEdit } from './UserProfileEdit'

    const CardWrapper=styled.div`
        background:#F5F7FA;
        width:80%;
    `
    const UserImage=styled.div`
        margin:4% 33% 3% 33%;
        width:375px;
        box-shadow: 0 5px 13px 1px rgba(0,0,0,.06);
        overflow-x:"hidden";
    `
    const UserInfo=styled.div`
            margin:0;
            background:white;
            padding:10px 0px 5px 0px;
            text-align:left;
box-shadow: 0 5px 15px 1px rgba(0,0,0,.09);

border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
    `
    const Button=styled.button`
    padding: 10px 10px;
    border-radius: 100px;
    width: 100px;
    outline:none;
    color:white;
    border:0px;
    font-weight:700;
    background: linear-gradient(262deg, #ff7854, #fd267d);
    `

export class UserProfileCard extends Component {


                componentDidMount(){
                    const {moreInfo}=this.context

                     if(!moreInfo){
                        const {history}=this.props
                        history.push("/app/profile")
                     }
                     else{
                        const {history}=this.props
                        history.push("/app/profile/edit")
                     }
                }
                
                handleMore=(e)=>{
                        e.preventDefault();

                        const {handleMoreInfo}=this.context
                        handleMoreInfo()
                      
                      const {history}=this.props
                      history.push("/app/profile/edit")
                }

    render() {
        const  {presentUser}=this.context
        const {moreInfo}=this.context
        return (
            <CardWrapper >{
              !moreInfo? ( 
              <UserImage>
                <PositionCarouselDemo/>
                 <UserInfo>
                     <div>
                         <div >
                         <h2 style={{marginLeft:"5px"}}>
                         {`${presentUser.first_name} ${presentUser.age}`} 
                         <img width="40px" src={"https://lh3.googleusercontent.com/proxy/8DENmllYGhi7oiB1lsT-hpX_iNoa2UpVvlXNN_dA4CmdHO-6VmypfBQ7XPc0PibMsphHCtweQUJvAdTVh15uCpU45Mt_fF9XjXZGWcJdFD9UHhjR6zyFOQxuiVE"} alt=""/>
                         </h2>
                         </div>
                         {/* <hr/> */}
                          <div style={{position:"relative"}}>
                              {/* <span style={{letterSpacing:"2px",fontSize:"14px",fontFamily:"sans-serif",padding:"20px"}}>
                                <br/>
                                Eh, I’ll do this part when I think of something clever.<br/>
                                Until then keep swiping😃
                              </span> */}
                              <br/>
                                <Button style={{position:"absolute",bottom:0,right:130}}onClick={this.handleMore}>Edit info</Button>
                          </div>
                     </div>
                 </UserInfo>
                </UserImage>):(
                    <div>
                          <UserProfileEdit history={this.props.history}/> 
                          
                    </div>
                )}
            </CardWrapper>
        )
    }
}

UserProfileCard.contextType=DataContext
