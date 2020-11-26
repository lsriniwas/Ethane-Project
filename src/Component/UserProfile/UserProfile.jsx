import React, { Component } from 'react'
import styled from "styled-components"
import { DataContext } from '../../DataContextProvider/DataContextProvider'
import dp from "../../Images/img4.jpg"
import { ViewProfileInfo } from '../ProfileInfo/ViewParticularProfile'
import { UserProfileCard } from './UserProfileCard'

const ProfileView=styled.div`
    display:flex;
    backgorund:#F5F7FA;
    margin:0;
   
`
const SideNavBar=styled.div`
    // position:fixed;
    margin:0;
    background:#F5F7FA;
    width:390px;
    height:100vh;
    border:1px solid #E0E4E9;
`
const SideHeader=styled.div`

color:white;
padding:15px 20px;
    margin:0;
    display:flex;
    height:73px;
    background: linear-gradient(262deg, #ff7854, #fd267d);
   
`
const ProfilePic=styled.div`
    flex-grow:2; 
    justify-content: center;
    display:flex;
    & div{
        height:34px;
    }
    
    & h2 {
        color:white;
    }
`


export class UserProfile extends Component {

        handleArrow=()=>{
            const {history}=this.props
            history.push("/app/recs")
        }
    render() {
        console.log(this.props)
        const {presentUser}=this.context
        const {history}=this.props
        return (
            <div>
                <ProfileView>
                   <SideNavBar>
                        <SideHeader>
                            <div style={{marginTop:"5px",cursor:"pointer"}} onClick={this.handleArrow}>
                                <i class='fas fa-chevron-left' style={{fontSize:"24px",color:"white"}}></i>
                            </div>
                            <ProfilePic>
                                   <div  style={{margin:0,border:"1px solid white",borderRadius:"100px",width:"34px",padding:0,background:"white"}}>
                                       <img src={presentUser.imgSrc} alt="" width="30px" height="30px"  style={{borderRadius:"100px",overflow:"hidden",margin:0}} />
                                   </div>
                                   <div style={{marginLeft:"10px",cursor: "context-menu"}}>
                                   <h4 style={{color:"white"}}>
                                       My Profile   
                                   </h4>
                                   </div>
                            </ProfilePic>
                        </SideHeader>
                        <ViewProfileInfo history = {history} />
                   </SideNavBar> 
                     <UserProfileCard history={history}/>
            </ProfileView>
            </div>
        )
    }
}


UserProfile.contextType=DataContext