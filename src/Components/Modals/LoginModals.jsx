import React from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import { Pin } from "./Pin";


export class LoginModals extends React.Component {
    state = {
        visibleCreateAccount: false, 
        visibleMobileNumber: false,
        visibleOtp: false,
        mobileNumber: "",
        pin: "",
        isAuth: false
    };

    showModal = () => {
        this.setState({
        visibleCreateAccount: true
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visibleCreateAccount: false,
            visibleMobileNumber: true
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
        visibleCreateAccount: false, 
        visibleMobileNumber: false, 
        visibleOtp: false
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOkMobile = (e) => {
        this.setState({
            visibleMobileNumber: false,
            visibleOtp: true
        })
    }

  render() {
      const styles  = {width:"240px",
        height:"45px",
        display:"flex",
        justifyContent:"center",
        margin:"auto",
        padding:"8px 18px",
        fontSize:"16px",
        fontWeight:"light",
        borderRadius:"20px",
        color:"white",
        outline:"none",
        color:"white",
        border:"0px",
        fontFamily: "sans-serif",
        background: "linear-gradient(262deg, #FF7854, #FD267D)",
        backgroundImage: "linear-gradient(262deg, rgb(255, 120, 84), rgb(253, 38, 125))",
        outline: "none"
        // background: "linear-gradient(262deg, #FD267D,#FF7854)",
        // backgroundImage: "linear-gradient(262deg,  rgb(253, 38, 125)rgb(255, 120, 84))" 
    }
      const {isAuth} = this.state
      if(!isAuth){
    return (
        <>
            <Button type="primary" onClick={this.showModal} style ={{...styles}}>
                Create Account
            </Button>
            <Modal
                visible={this.state.visibleCreateAccount}
                onCancel={this.handleCancel}
                bodyStyle = {{textAlign: "center"}}
                width = "450px"
                footer = {null}
            >
                <img 
                    src = "https://www.brandeps.com/logo-download/T/Tinder-logo-vector-03.svg" 
                    height= "30px" 
                    idth = "30px"
                />
                <h2><i>CREATE ACCOUNT</i></h2>
                <p>By clicking Log In, you agree to our Terms. Learn how we process your data in our Privacy Policy, and Cookie Policy</p>

                <br />
                <button 
                    onClick = {this.handleOk} 
                    style = {{backgroundColor: "white", borderRadius: 20, padding: "5px 40px 5px 10px", cursor: "pointer", outline: "none"}}
                >
                    <div style ={{display: "flex", outline: "none"}} >
                        <img src = "https://www.flaticon.com/svg/static/icons/svg/281/281764.svg" style = {{height: "30px", width: "30px", margin: 5, marginRight: 40}} ></img>
                        <h3 style ={{margin: 5, outline: "none"}} >LOG IN WITH GOOGLE</h3> 
                    </div>
                </button>

                <br /> <br />
                <p> <u>More Options</u></p>
    
                <h2><i>GET THE APP!</i></h2>
                {/* <div>
                <div> <img alt = "icon" src = "https://www.flaticon.com/svg/static/icons/svg/300/300218.svg" height= "10px" width = "10px" > </img> </div>
                <div> <img alt = "icon" src = "https://www.flaticon.com/svg/static/icons/svg/179/179309.svg" height= "10px" width = "10px" > </img> </div>
                </div> */}
                
            </Modal>
            <Modal
                visible={this.state.visibleMobileNumber}
                onCancel={this.handleCancel}
                bodyStyle = {{textAlign: "center"}}
                width = "450px"
                footer = {null}
            >
                <img src = "https://www.brandeps.com/logo-download/T/Tinder-logo-vector-03.svg" height= "30px" width = "30px" />
                <h2>ENTER YOUR MOBILE NUMBER</h2>
                <div style = {{display: "flex", marginLeft: "100px"}} >   
                    <div style = {{margin: 5}} > IN
                        <span> 
                            <img src = "https://www.flaticon.com/svg/static/icons/svg/566/566004.svg" height = "10px" width= "10px" />
                        </span>
                    </div>
                    <input 
                        width = "300px" 
                        value = "+91" 
                        name = "mobileNumber" 
                        onChange = {this.handleChange} 
                        value = {this.state.mobileNumber} 
                    />
                </div>
                <br />
                <p> When you tap to "continue", Tinder will send a text with a verification code. Message and data rates may apply. The verified phone number can be used to login. Learn what happens <u> when your number changes. </u> </p>
                <br /> 
                <button 
                    onClick = {this.handleOkMobile} 
                    style = {{backgroundColor: "#FB576A", color: "white", borderRadius: 20, padding: "10px 70px 10px 70px", border: "none", outline: "none"}} 
                >
                    Continue
                </button>
                
            </Modal>
            <Modal
                visible={this.state.visibleOtp}
                onCancel={this.handleCancel}
                bodyStyle = {{textAlign: "center"}}
                width = "450px"
                footer = {null}
            >
            <img 
                src = "https://www.brandeps.com/logo-download/T/Tinder-logo-vector-03.svg" 
                alt = 'img' 
                height= "30px" 
                width = "30px" 
            />
            <h2>Enter your code </h2>
  
            <br />
  
            <div style = {{display: "flex" }} >
              <h4> Enter the code sent to +91{this.state.mobileNumber} </h4>
              <h4 style = {{marginLeft: 60, color: "#2982E4"}}> RESEND </h4>
            </div>
           
           <br />
  
            <Pin
              len={6}
              onChange={(val) => this.setState({ pin: val })}
            />
  
            <br /> <br />
            <button 
                style = {{backgroundColor: "#FB576A", color: "white", borderRadius: 20, padding: "10px 70px 10px 70px", border: "none", outline: "none"}} 
            >
                Continue
            </button>
            
          </Modal>
        </>
      );
    }
    // else {
    //     <Form />
    // }
  }
}

