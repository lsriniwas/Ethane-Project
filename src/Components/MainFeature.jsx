import React, { Component } from 'react'
import {DataContext} from '../Context/DataContextProvider'
import PhotoSlideshow from './PhotoSlideshow'
import {SlideShow} from './SlideShow.jsx'

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
        this.setState({
          currentData: this.state.data[i]
        })
        }
        else if (i === 0){
          this.disabled = true
        }
    }

    handleNext = () => {
        if (i < this.state.data.length-1) {
        i = i + 1
        this.setState({
        currentData: this.state.data[i]
        })
        }
    }

    componentDidMount(){
        const {data} = this.context
        const {gender} = this.context

        const updatedData = data.filter(item => item.gender !== gender ) 

        this.setState({
            data: updatedData,
            currentData: data[i]
        })
    }

    render() {
        const {currentData} = this.state
        console.log(currentData)
        return (
            <div style = {{backgroundColor: "lightGrey", height: 800}}>
                <div style = {{paddingTop: 100 }}>
                    <SlideShow currentData = {currentData} />
                </div>
                <div style = {{margin: 10, marginLeft: 0}} >
                    <button disabled = {i < 1} onClick = {this.handlePrev} style = {{borderRadius: 50, padding: "5px", backgroundColor: "white", border: "none", padding: 10, margin: 5}} > <img src= "https://www.flaticon.com/svg/static/icons/svg/3227/3227585.svg" style = {{height: 30, weight: 30}} /> </button>
                    <button disabled = {i > (this.state.data.length-2)} onClick = {this.handleNext} style = {{borderRadius: 50, padding: "5px", backgroundColor: "white", border: "none", padding: 10, margin: 5}} > <img src= "https://www.flaticon.com/svg/static/icons/svg/1828/1828665.svg" style = {{height: 30, weight: 30}} /> </button>
                    <button style = {{borderRadius: 50, padding: "5px", backgroundColor: "white", border: "none", padding: 10, margin: 5}} > <img src= "https://www.flaticon.com/svg/static/icons/svg/1174/1174509.svg" style = {{height: 30, weight: 30}} /> </button>
                    <button disabled = {i > (this.state.data.length-2)} onClick = {this.handleNext} style = {{borderRadius: 50, padding: "5px", backgroundColor: "white", border: "none", padding: 10, margin: 5}} > <img src= "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/green-heart.png" style = {{height: 30, weight: 30}} /> </button>
                    <button style = {{borderRadius: 50, padding: "5px", backgroundColor: "white", border: "none", padding: 10, margin: 5}} > <img src= "https://www.flaticon.com/svg/static/icons/svg/616/616494.svg" style = {{height: 30, weight: 30}} /> </button>
                </div>
            </div>
        )
    }
}
MainFeature.contextType = DataContext