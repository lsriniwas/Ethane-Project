import React, { Component } from 'react'
import axios from "axios"
import Data from './Data.json'

export const DataContext=React.createContext();
export class DataContextProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            entireData:[],
            isLoading:false,
            error:null,
            passionList:"",
            sexualOreint:"",
            presentUser:[],
            data: Data,
            gender: "male",
          }
        this.getAllUserData=this.getAllUserData.bind(this)
        this.newUserData=this.newUserData.bind(this)
        
    }
    
    //pushing new user details to db JSON 
    
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
        const {entireData,isLoading,error,passionList,sexualOreint,gender, data,presentUser }=this.state
        const {newUserData,getAllUserData}=this
        const value={getAllUserData,entireData,isLoading,error,passionList,sexualOreint,newUserData,gender,data,presentUser }
        return (
            <DataContext.Provider value={value}> 
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
