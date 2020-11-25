import React, { Component } from 'react'
import styled from "styled-components"
import { DataContext } from '../../DataContextProvider/DataContextProvider'
import dp from "../../Images/img4.jpg"
import MainFeature from './MainFeature'

const ProfileView=styled.div`
    margin:0;
    display: flex;
`
const SideNavBar=styled.div`
    position:fixed;
    width:375px;
    height:100vh;
    border:1px solid black;
    flex:1;
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

const BagImage=styled.div`
border:1px solid black;
padding:1px 3px;
    flex-grow:2;
    display:flex;

    & h5 {
        color:white;
    }

    // & div{
    //    display: ${props=>props.text?"none":"flex"};
    // } 

    // &:hover {
    //     display: ${props=>props.text && "flex"};
    // }

`
export class Profile extends Component {

    handleProfile=()=>{
        const {history}=this.props;
        history.push("/app/profile")
    }

    render() {
        const {history} = this.props
        console.log(history)
        const {presentUser}=this.context
        console.log(presentUser)
        // console.log(imgSrc)
        return presentUser.length===0 && (
            <ProfileView>
                   <SideNavBar>
                        <SideHeader>
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
                            <BagImage>
                               <div style={{width:"150px",justifyContent:"space-between",textAlign:"center",display:"flex",border:"2px solid white",padding:"1px",borderRadius:"100px",overflow:"hidden",margin:0,}}>
                                   <div IMG>
                                   <img src="https://www.flaticon.com/svg/static/icons/svg/2910/2910795.svg"  width="20px" height="20px"  alt=""/>
                                   </div>
                                   <div style={{textAlign:"center",marginTop:"5px",marginLeft:"5px"}} text>
                                    <h5>WORK MODE</h5>
                                   </div>
                               </div>
                            </BagImage>
                        </SideHeader>
                   </SideNavBar>       
                   <div>
                        <MainFeature history = {history} />
                    </div>        
            </ProfileView>
        )
    }
}

Profile.contextType=DataContext