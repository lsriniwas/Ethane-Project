import React, { Component } from 'react'
import { DataContext } from '../../DataContextProvider/DataContextProvider'
import {SlideShow} from './SlideShow'

var i = 0

export default class MainFeature extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: [],
            currentData: ""
        }
    }

    handlePrev = () => {

        if (i > 0) {
          i = i - 1
          setInterval(() => {
                this.setState({
                    currentData: this.state.data.profiles[i]
                })
            }, 1000)
        
        }
    }

    handleNext = () => {
        if (i < this.state.data.profiles.length-1) {
            i = i + 1
            setInterval(() => {
                this.setState({
                    currentData: this.state.data.profiles[i]
                })
            }, 1000)
        }
    }

    componentDidMount(){
        const {data} = this.context
        const {gender} = this.context

        // const updatedData = data.filter(item => item.gender !== gender ) 

        this.setState({
            data: data,
            currentData: data.profiles[i]
        }, () => console.log(this.state))
        
    }

    render() {
        const {currentData} = this.state
        console.log(currentData)
        return (
            <div style = {{backgroundColor: "#F5F7FA", height: 800}}>
                <div style = {{paddingTop: 100}}>
                    <SlideShow currentData = {currentData} history = {this.props.history} />
                </div>
                <div style = {{margin: 10, marginLeft: 220}} >
                    <button disabled = {i < 1} onClick = {this.handlePrev} style = {{borderRadius: 50, padding: "15px", backgroundColor: "white", border: "none", margin: 5, outline: "none"}} > <img src= "https://www.flaticon.com/premium-icon/icons/svg/1477/1477010.svg" style = {{height: 20, weight: 20}} /> </button>
                    <button disabled = {i > (this.state.data.length-2)} onClick = {this.handleNext} style = {{borderRadius: 50, padding: "15px", backgroundColor: "white", border: "none", margin: 5, outline: "none"}} > <img src= "https://www.flaticon.com/svg/static/icons/svg/1828/1828665.svg" style = {{height: 20, weight: 20}} /> </button>
                    <button style = {{borderRadius: 50, padding: "15px", backgroundColor: "white", border: "none", margin: 5, outline: "none"}} > <img src= "https://www.flaticon.com/svg/static/icons/svg/1174/1174509.svg" style = {{height: 20, weight: 20}} /> </button>
                    <button disabled = {i > (this.state.data.length-2)} onClick = {this.handleNext} style = {{borderRadius: 50, padding: "15px", backgroundColor: "white", border: "none", margin: 5, outline: "none"}} > <img src= "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/green-heart.png" style = {{height: 20, weight: 20}} /> </button>
                    <button style = {{borderRadius: 50, padding: "10px", backgroundColor: "white", border: "none", margin: 5, outline: "none"}} > <img src= "https://www.flaticon.com/svg/static/icons/svg/616/616494.svg" style = {{height: 25, weight: 25}} /> </button>
                </div>
            </div>
        )
    }
}
MainFeature.contextType = DataContext