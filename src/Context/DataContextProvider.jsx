import React, { Component } from 'react'
import Data from './Data.json'

export const DataContext = React.createContext()

export default class DataContextProvider extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: Data,
            gender: "",
        }
    }
    render() {
        const {gender, data} = this.state
        const value = {gender, data}
        return (
            <DataContext.Provider value = {value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
