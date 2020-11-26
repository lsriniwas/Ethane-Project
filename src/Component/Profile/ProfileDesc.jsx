import React, { Component } from 'react'
import { DataContext } from '../../DataContextProvider/DataContextProvider'


export default class ProfileDesc extends Component {
    constructor(props){
        super(props)

    }

    handleGoback=()=>{
            
        const {handleMoreFeatures}=this.context
        handleMoreFeatures()
        const{history}=this.props
        history.replace("/app/recs")
    }

    render() {
        const {data} = this.props
        console.log(data)
        return (
            <div>
                <div style = {{height: 450, width: 300, borderRadius: 5, backgroundColor: "white", marginLeft: 800, textAlign: "left", padding: 10}} >
                    <button onClick={this.handleGoback} style = {{backgroundColor: "white", outline: "none", border: "none", cursor: "pointer"}} > <img src = "https://www.flaticon.com/svg/static/icons/svg/271/271220.svg" height = "30px" width = "30px" /> </button>
                    <div style = {{marginTop: 30, marginLeft: 10}} >
                        <h1 > {data.first_name} {data.last_name} </h1>
                        <p style = {{lineHeight: 1, fontSize: 16, color: "grey"}} > {data.gender} </p>
                        <p style = {{lineHeight: 1, fontSize: 16, color: "grey"}} > Lives in {data.location} </p>
                        <hr style ={{backgroundColor: "grey"}} /> <br />
                        <p style = {{lineHeight: 1, fontSize: 16, color: "grey"}}> {data.about} </p>
                        <br /> <hr style ={{backgroundColor: "grey"}}  /> <br/>
                        <p style = {{lineHeight: 1, fontSize: 14, color: "lightgrey", textAlign: "center"}}>REPORT {data.first_name} {data.last_name} </p>
                        <br />
                    </div>
                    
                </div>
            </div>
        )
    }
}
ProfileDesc.contextType = DataContext