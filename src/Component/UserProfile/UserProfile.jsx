import React, { Component } from 'react'
import styled from "styled-components"
import { DataContext } from '../../DataContextProvider/DataContextProvider'
import dp from "../../Images/img4.jpg"
import { ViewProfileInfo } from '../ProfileInfo/ViewParticularProfile'

const ProfileView=styled.div`
    margin:0;
`
const SideNavBar=styled.div`
    position:fixed;
    width:375px;
    height:100vh;
    border:1px solid black;
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
cursor:pointer;
    border:1px solid black;
    flex-grow:2;
    display:flex;

    & div{
        height:34px;
    }
    
    & h2 {
        color:white;
    }
`


export class UserProfile extends Component {
    render() {
        return (
            <div>
                <ProfileView>
                   <SideNavBar>
                        <SideHeader>
                            <div>
                            <i class='fas fa-angle-left' style={{fontSize:"48px",color:"blue"}}></i>
                            </div>
                            <ProfilePic onClick={this.handleProfile}>
                                   <div  style={{margin:0,border:"2px solid white",borderRadius:"100px",width:"34px",padding:0,background:"white"}}>
                                       <img src={dp} alt="" width="30px" height="30px"  style={{borderRadius:"100px",overflow:"hidden",margin:0}} />
                                   </div>
                                   <div style={{marginLeft:"10px"}}>
                                   <h2>
                                       My Profile
                                   </h2>
                                   </div>

                            </ProfilePic>
                        </SideHeader>
                        <ViewProfileInfo/>
                   </SideNavBar>               
            </ProfileView>
            </div>
        )
    }
}


UserProfile.contextType=DataContext