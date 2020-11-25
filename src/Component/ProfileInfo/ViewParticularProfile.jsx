import React from "react";
import Styled from "styled-components";

import "antd/dist/antd.css";
import { Slider,Switch} from "antd";
import { DataContext } from "../../DataContextProvider/DataContextProvider";

const Span = Styled.div`
font-size:11px;
line-height:normal;
padding:6px;
margin-top:2px;
margin-bottom:2px;
`
;
const InfoBox = Styled.div`
height:100%;
width:100%;
background-color:whitesmoke;
margin:auto;
overflow:scroll;

::-webkit-scrollbar {width: 0px; height: 0px; background: none; }
::-webkit-scrollbar-thumb { background-color: #000000 }
`;

const Description  = Styled.div`
font-size:11px;
font-weight:500;
margin:auto;
text-align:center;
color:black;`;
const Benefits = Styled.div`
font-size:11px;
font-weight:300;
margin:auto;
text-align:center;
`;

const RatingBox = Styled.div`
margin-top:22px;
background-color:white;
height:80px;
width:110px;
margin:auto;
text-align:center;
color:dark-grey;

margin-bottom:8px;

`;
const P = Styled.p`
font-weight:500;
text-align:left;
margin-top:4px;
color:dark-grey;
font-size:11px;
padding-top:5px;
padding-bottom:0;
margin-bottom:2px;
padding-left:4px;
`;
const FlexInfo = Styled.div`
padding-left:6px;
padding-right:6px;
padding-top:4px;
font-size:12px;
width:40%;
height:20px;
color:dark-grey;
background-color:white;
cursor:pointer;
&:hover{
    color:blue;
}`

const InfoLines =Styled.div`
text-align:left;
padding-left:6px;
font-size:12px;
height:30px;
color:dark-grey;
background-color:white;
border:1px solid #E0E4E9;
padding-top:2px;
padding-bottom:2px;`;

const Button =Styled.button`
padding-left:6px;
font-size:12px;
height:33px;
width:100%;
color:dark-grey;
background-color:white;
border:0.5px solid #E0E4E9;
padding-top:2px;
padding-bottom:2px;
text-align:center;`;
const Img = Styled.img`
width:25px;
margin:auto;
margin-top:-22px;
border-radius:40%;`;

const Flexbox = Styled.div`
display:flex;
width:100%;
height:38px;
justify-content:space-between;
background-color:white;
border:1px solid #E0E4E9;
padding-top:3px;
padding-bottom:2px;`;

class ViewProfileInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
      //  this.handleUserLogout = this.handleUserLogout(this)
    }
    // handleUserLogout(){
    //     const {handleLogout} = this.context
    //     handleLogout()
    // }

componentDidMount(){
    const {entireData} = this.context;
    console.log(entireData)
    console.log(entireData[entireData.length - 1])
    this.setState({
        data:entireData[entireData.length - 1]
    })
}

     onChange=(value)=> {
        console.log('onChange: ', value);
      }
      
      onAfterChange=(value)=> {
        console.log('onAfterChange: ', value);
      }
render(){
    const {data} = this.state
    return(
        <>
        {
            data && 
            <InfoBox>
            <img  
            src = "https://dude-hack.com/wp-content/uploads/2020/10/Tinder-Gold-vs-Tinder-Platinum-3-membership-options.png"
            alt = "subscriptions"
            height = "290px"
            marginBottom = "20px"/>
            <br></br>
        
            <div style = {{display:"flex",justifyContent:"space-between"}}>
            <RatingBox>
                <Img src = "https://www.flaticon.com/svg/static/icons/svg/616/616494.svg"/>
                <Description>0 remaining</Description>
                <Benefits style = {{color:"purple"}}>Get More Boosts</Benefits>
            </RatingBox>
            <RatingBox>
            <Img src = "https://www.flaticon.com/svg/static/icons/svg/1174/1174509.svg"/>
                <Description>1 remaining</Description>
                <Benefits style = {{color:"skyblue"}}>Get More Super 
                <br></br>
                Likes</Benefits>
            </RatingBox>
            </div>
            <P>ACCOUNT SETTINGS</P>
            <InfoLines>Restore Purchases</InfoLines>
            <Flexbox>
                <FlexInfo style= {{textAlign:"left"}}>Email</FlexInfo>
                <FlexInfo>Verify now</FlexInfo>
            </Flexbox>
            <Flexbox>
                <FlexInfo  style= {{textAlign:"left"}}>Phone Number</FlexInfo>
                <FlexInfo>+9123903002</FlexInfo>
            </Flexbox>
            <InfoLines  style= {{textAlign:"left"}}>Promo Code</InfoLines>
            <Span>Verify a Phone Number and Email to help secure 
                <br></br>your account</Span>
        <P>DISCOVERY SETTINGS</P>
        <Flexbox>
            <FlexInfo style= {{textAlign:"left"}}>Location</FlexInfo>
            <FlexInfo>Bangalore</FlexInfo>
        </Flexbox>
        <Flexbox>
            <FlexInfo style= {{textAlign:"left"}}>Maximum Distance</FlexInfo>
           
            <FlexInfo > 80 Km</FlexInfo>
        </Flexbox>
        <InfoLines style = {{border:0,borderBottom:"0.5px solid #E0E4E9 "}}> 
            <Slider defaultValue={30}  />
            </InfoLines>
        <Flexbox>
            <FlexInfo style= {{textAlign:"left"}}>Looking For</FlexInfo>
            <FlexInfo>Women</FlexInfo>
        </Flexbox>
        
        <Flexbox style = {{borderBottom:0}}>
            <FlexInfo style= {{textAlign:"left"}}>Age Range</FlexInfo>
            <FlexInfo>18-35</FlexInfo>
         
        </Flexbox>
        
   <InfoLines style = {{border:0,borderBottom:"0.5px solid #E0E4E9 "}}>
   <Slider
   style = {{marginBottom:"2px"}}
      range
      step={10}
      defaultValue={[18, 35]}
      onChange={this.onChange}
      onAfterChange={this.onAfterChange}
    />
   </InfoLines>
       
       <Flexbox>
           <FlexInfo style= {{textAlign:"left"}}>
               Global
           </FlexInfo>
           <FlexInfo>
           <Switch defaultChecked  />
           </FlexInfo>
       </Flexbox>
        <Span>
            Going global will allow you to see people from around <br>
            </br>
            the world after you've run out of profiles nearby
        </Span>
        <Flexbox>
           <FlexInfo style= {{textAlign:"left"}}>
               Show me on tinder
           </FlexInfo>
           <FlexInfo>
           <Switch   />
           </FlexInfo>

       </Flexbox>
       <Span>
           While turned off,you will not be shown in the card
           <br></br>
           stack you can still see and chat with your matches
       </Span>
       <P>WEB PROFILE</P>
       <Flexbox>
           <FlexInfo style= {{textAlign:"left"}}>Username</FlexInfo>
           <FlexInfo>Claim Yours</FlexInfo>
       </Flexbox>
       <Span>Create a username.Share your username.Have People 
           <br></br>
           all over the world match with you right on Tinder</Span>
           <P>READ RECEIPTS</P>
           <Flexbox>
               <FlexInfo style = {{textAlign:"left",width:"70%"}}>Manage Read Receipts</FlexInfo>
               <FlexInfo style = {{textAlign:"right"}}>{` >`} </FlexInfo>
           </Flexbox>
        <P>ACTIVITY STATUS</P>
        <Flexbox>
               <FlexInfo style = {{textAlign:"left" ,width:"70%"}}>Recently Active Status</FlexInfo>
               <FlexInfo style = {{textAlign:"right"}} >{` >`} </FlexInfo>
           </Flexbox>
           <P>NOTIFICATIONS</P>
        <Flexbox>
               <FlexInfo  style = {{textAlign:"left" ,width:"70%"}} >Email</FlexInfo>
               <FlexInfo style = {{textAlign:"right"}}>{` >`} </FlexInfo>
           </Flexbox>
       
        <Flexbox>
               <FlexInfo style = {{textAlign:"left"}}>Push Notifications</FlexInfo>
               <FlexInfo style = {{textAlign:"right"}}>{` >`} </FlexInfo>
           </Flexbox>
           <P>LANGUAGE</P>
        <Flexbox>
               <FlexInfo>Language</FlexInfo>
               <FlexInfo style = {{width:"40%",textAlign:"right"}}> {`English->` }</FlexInfo>
           </Flexbox>
           <P>HELP & SUPPORT</P>
        <Flexbox>
               <FlexInfo style = {{width:"70%",textAlign:"left"}}>Help & Support</FlexInfo>
               <FlexInfo style = {{width:"40%",textAlign:"right"}}> {`->`}</FlexInfo>
           </Flexbox>
           <P>COMMUNITY</P>

           <Flexbox>
               <FlexInfo style = {{width:"70%",textAlign:"left"}}>Community Guidelines</FlexInfo>
               <FlexInfo style = {{width:"40%",textAlign:"right"}}> {`->`}</FlexInfo>
           </Flexbox>
           <Flexbox>
               <FlexInfo style = {{width:"60%",textAlign:"left"}}>Safety & Policy Center</FlexInfo>
               <FlexInfo style = {{width:"40%",textAlign:"right"}}>{`->`}</FlexInfo>
           </Flexbox>
           <Flexbox>
               <FlexInfo style = {{width:"60%",textAlign:"left"}}>Safety Tips</FlexInfo>
               <FlexInfo style = {{width:"40%",textAlign:"right"}}>{`->`}</FlexInfo>
           </Flexbox>
           <P>LEGAL</P>
           <Flexbox>
               <FlexInfo style = {{width:"60%",textAlign:"left"}}>Privacy Settings</FlexInfo>
               <FlexInfo style = {{width:"40%",textAlign:"right"}}>{`->`}</FlexInfo>
           </Flexbox>
           <Flexbox>
               <FlexInfo style = {{width:"60%",textAlign:"left"}}>Cookie Policy</FlexInfo>
               <FlexInfo style = {{width:"40%",textAlign:"right"}}>{`->`}</FlexInfo>
           </Flexbox>
           <Flexbox>
               <FlexInfo style = {{width:"60%",textAlign:"left"}}>Privacy Policy</FlexInfo>
               <FlexInfo style = {{width:"40%",textAlign:"right"}}>{`->`}</FlexInfo>
           </Flexbox>
           <Flexbox>
               <FlexInfo style = {{width:"60%",textAlign:"left"}}>Terms of Service</FlexInfo>
               <FlexInfo style = {{width:"40%",textAlign:"right"}}>{`->`}</FlexInfo>
           </Flexbox>
           <br></br>
           <br></br>
          
     <InfoLines style = {{textAlign:"center"}}>Share Tinder</InfoLines>
     <br></br>
           <br></br>
           <Button>Logout</Button>
           <br>
           </br>
           <img 
           alt=""
           height = "25px"
           style  = {{margin:"5px"}}
           src = "https://e7.pngegg.com/pngimages/762/423/png-clipart-tinder-logo-dating-computer-icons-premium-angle-heart-thumbnail.png"/>
          <div>Version 2.64.08</div>
           
        </InfoBox>




        }
       

        </>
    )
}
}
ViewProfileInfo.contextType = DataContext;
export {ViewProfileInfo}