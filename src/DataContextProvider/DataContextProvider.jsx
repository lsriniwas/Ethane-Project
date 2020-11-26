import React, { Component } from 'react'
import axios from "axios"
import Data from './Data.json'

// src={process.env.PUBLIC_URL + "/tumblr.png"}

export const DataContext=React.createContext();
export class DataContextProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            isAuth:false,
            entireData:[],
            isLoading:false,
            error:null,
            passionList:"",
            sexualOreint:"",
            presentUser:[],
            data: Data,
            gender: "",
            moreInfo:false,
            moreFeatures: false
          }
          this.handleLogout = this.handleLogout(this)

        this.getAllUserData=this.getAllUserData.bind(this)
        this.newUserData=this.newUserData.bind(this)
        
    }
    
    handleMoreInfo=()=>{
      this.setState({
          moreInfo:!this.state.moreInfo
      })
    }
    handleMoreFeatures=()=>{
      this.setState({
          moreFeatures:!this.state.moreFeatures
      })
    }

    //pushing new user details to db JSON 
    handleLogout(){
      this.setState({
        isAuth:false
      })
    }

    newUserData({payload}){
      console.log(payload)
      const { username,
      password,
      first_name,
      last_name,
      gender,
      email,
      age,
      imgSrc,
      passions,
      sexual,
      about,
      liked,
      location
    }=payload
      console.log("wowoow")

      axios.post("http://localhost:3004/profiles",{
        username,
        password,
        first_name,
        last_name,
        gender,
        email,
        age,
        imgSrc,
        about,
        liked,
        location
      }).then(res=>{
          this.setState({
            presentUser:res.data
          })
        })
        .catch(err=>alert(err))
    }

    getAllUserData(){
      const {entireData}=this.state
        return entireData
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        axios
          .get(`http://localhost:3004/profiles`)
          .then((res) => {
            this.setState({
            entireData: [...res.data],
              isLoading: false,
              error: false,
            })
          })
          .catch((err) => {
            this.setState({
              isLoading: false,
              error:err
            })
          })
      }
    render() {
        const {entireData,isLoading,error,passionList,sexualOreint,gender, data,presentUser,moreInfo, moreFeatures }=this.state
        const {newUserData,getAllUserData,handleLogout,handleMoreInfo, handleMoreFeatures}=this
        const value={moreInfo,handleMoreInfo,getAllUserData,handleLogout,entireData,isLoading,error,passionList,sexualOreint,newUserData,gender,data,presentUser, moreFeatures, handleMoreFeatures }

        return (
            <DataContext.Provider value={value}> 
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
