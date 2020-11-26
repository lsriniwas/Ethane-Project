import React, {PureComponent } from 'react'
import { DataContext } from '../../DataContextProvider/DataContextProvider'
import { Profile } from './Profile'
import {SlideShow} from './SlideShow'

var i = 0

export default class MainFeature extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            data: [],
            currentData: "",
            like: false,
            nope: false,
            superLike: false
        }
    }

    handlePrev = () => {

        if (i > 0) {
          i = i - 1
          setInterval(() => {
                this.setState({
                    currentData: this.state.data[i]
                })
            }, 1500)
        
        }
    }

    handleLike = () => {
        if (i < this.state.data.length-1) {
            i = i + 1
            this.setState({
                like: true
            })
            setInterval(() => {
                this.setState({
                    currentData: this.state.data[i], 
                    like: false
                })
            }, 1500)
        }
    }

    handleNope = () => {
        if (i < this.state.data.length-1) {
            i = i + 1
            this.setState({
                nope: true
            })
            setInterval(() => {
                this.setState({
                    currentData: this.state.data[i], 
                    nope: false
                })
            }, 1500)
        }
    }

    handleSuperLike = () => {
        if (i < this.state.data.length-1) {
            i = i + 1
            this.setState({
                superLike: true
            })
            setInterval(() => {
                this.setState({
                    currentData: this.state.data[i], 
                    superLike: false
                })
            }, 1500)
        }
    }

    componentDidMount(){
        const {data} = this.context
        const {gender} = this.context

        const updatedData = data.profiles.filter(item => item.gender !== gender ) 

        this.setState({
            data: updatedData,
            currentData: updatedData[i]
        }, () => console.log(this.state))
        
    }

    render() {
        const {currentData, like, nope, superLike} = this.state
        const {handleMoreFeatures, moreFeatures} = this.context
        console.log(currentData)
        if(!moreFeatures){
            return (
                <div style = {{backgroundColor: "#F5F7FA", height: 800}}>
                    <div style = {{paddingTop: 100}}>
                        <SlideShow currentData = {currentData} history = {this.props.history} like = {like} nope = {nope} superLike = {superLike} feature = {handleMoreFeatures} moreFeatures = {moreFeatures} />
                    </div>
                    <div style = {{margin: 10, marginLeft: 320}} >
                        <button disabled = {i < 1} onClick = {this.handlePrev} style = {{borderRadius: 50, padding: "15px", backgroundColor: "white", border: "none", margin: 5, outline: "none", cursor: "pointer", }} > <img src= "https://www.flaticon.com/premium-icon/icons/svg/1477/1477010.svg" style = {{height: 20, weight: 20}} /> </button>
                        <button disabled = {i > (this.state.data.length-2)} onClick = {this.handleNope} style = {{borderRadius: 50, padding: "15px", backgroundColor: "white", border: "none", margin: 5, outline: "none", cursor: "pointer"}} > <img src= "https://www.flaticon.com/svg/static/icons/svg/1828/1828665.svg" style = {{height: 20, weight: 20}} /> </button>
                        <button disabled = {i > (this.state.data.length-2)} onClick = {this.handleSuperLike} style = {{borderRadius: 50, padding: "15px", backgroundColor: "white", border: "none", margin: 5, outline: "none", cursor: "pointer"}} > <img src= "https://www.flaticon.com/svg/static/icons/svg/1174/1174509.svg" style = {{height: 20, weight: 20}} /> </button>
                        <button disabled = {i > (this.state.data.length-2)} onClick = {this.handleLike} style = {{borderRadius: 50, padding: "15px", backgroundColor: "white", border: "none", margin: 5, outline: "none", cursor: "pointer"}} > <img src= "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/green-heart.png" style = {{height: 20, weight: 20}} /> </button>
                        <button style = {{borderRadius: 50, padding: "10px", backgroundColor: "white", border: "none", margin: 5, outline: "none", cursor: "pointer"}} > <img src= "https://www.flaticon.com/svg/static/icons/svg/616/616494.svg" style = {{height: 25, weight: 25}} /> </button>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div style = {{backgroundColor: "#F5F7FA", height: 800}}>
                <div style = {{paddingTop: 100}}>
                    <SlideShow currentData = {currentData} history = {this.props.history} like = {like} nope = {nope} superLike = {superLike} feature = {handleMoreFeatures} moreFeatures = {moreFeatures} />
                </div>
            </div>
            )
        }
        
    }
}
MainFeature.contextType = DataContext