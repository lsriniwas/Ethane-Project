import React, { Component } from "react";
import styled from "styled-components";
import { DataContext } from "../../DataContextProvider/DataContextProvider";
import dp from "../../Images/img4.jpg";
import { ViewProfileInfo } from "../ProfileInfo/ViewParticularProfile";
import MainFeature from "./MainFeature";

const ProfileView = styled.div`
  margin: 0;
`;
const SideNavBar = styled.div`
  position: fixed;
  width: 375px;
  height: 100vh;
  border: 1px solid #e0e4e9;
  flex: 1;
`;
const SideHeader = styled.div`
  color: white;
  padding: 15px 20px;
  margin: 0;
  display: flex;
  height: 73px;
  background: linear-gradient(262deg, #ff7854, #fd267d);
`;
const ProfilePic = styled.div`
  cursor: pointer;
  flex-grow: 2;
  display: flex;

  & div {
    height: 34px;
  }

  & h2 {
    color: white;
  }
`;
const Hover = styled.div`
//   width: 150px;
  justifycontent: space-between;
  textalign: center;
  display: flex;
  border: 2px solid white;
//   padding: 1px;
  border-radius: 100px;
  margin: 0;
//   width: 30px;
  .hide {
    display: none;
  }

  &:hover .hide {
    display: block;
  }
  &:hover .imga{
    margin-top:5px;
    margin-left:5px;
  }
  &:hover {
    font-size:11px;
    width: 150px;
  }
`;
const BagImage = styled.div`
  padding: 1px 3px;
  flex-grow: 2;
  display: flex;

  & h5 {
    color: white;
  }
`;
export class Profile extends Component {
  handleProfile = () => {
    const { history } = this.props;
    history.push("/app/profile");
  };

  render() {
    const { presentUser } = this.context;
    console.log(presentUser);
    return presentUser.length !==0  ? (
      <div>
      <ProfileView>
        <SideNavBar>
          <SideHeader>
            <ProfilePic onClick={this.handleProfile}>
              <div
                style={{
                  margin: 0,
                  border: "2px solid white",
                  borderRadius: "100px",
                  width: "34px",
                  padding: 0,
                  background: "white",
                }}
              >
                <img
                 
                  src={dp}
                  alt=""
                  width="30px"
                  height="30px"
                  style={{
                    borderRadius: "100px",
                    overflow: "hidden",
                    margin: 0,
                  }}
                />
              </div>
              <div style={{ marginLeft: "10px", color: "white" }}>
                <h4 style={{ color: "white" }}>My Profile</h4>
              </div>
            </ProfilePic>
            <BagImage>
              <Hover>
                <div
                  className="hide"
                  style={{
                    textAlign: "center",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                >
                  <p style={{ fontSize: "14px" }}>WORK MODE</p>
                </div>
                <div  className="imga">
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/2910/2910795.svg"
                    width="20px"
                    height="20px"
                    
                    alt=""
                  />
                </div>
              </Hover>
            </BagImage>
          </SideHeader>
        </SideNavBar>
      </ProfileView>
      
      <MainFeature history = {this.props.history} />
      </div>
    ) : (
      <>
        <div
          style={{
            background: "linear-gradient(262deg, #ff7854, #fd267d)",
            height: "100vh",
            width: "100vw",
            display: "grid",
            placeItems:"center",
             
          }}
        > 

        <div style={{marginLeft:"200px"}}>
            <svg
            width="300px"
            height="300px"
            viewBox="0 0 519 123"
          >
            <g fill="none" fill-rule="evenodd">
              <title>Tinder</title>
              <path
              
                d="M31.5 49.6C55 41.5 59 20.4 56 1c0-.7.6-1.2 1.2-1C79.7 11 105 35 105 71c0 27.6-21.4 52-52.5 52a50 50 0 0 1-28.2-92.7c.6-.4 1.4 0 1.4.7.3 3.7 1.3 13 5.4 18.6h.4z"
                fill="#fff"
              ></path>
             
            </g>
          </svg> 
        </div>
         
        </div>
      </>
    );
  }
}

Profile.contextType = DataContext;
