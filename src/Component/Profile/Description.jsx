import React, { Component } from 'react'
import { Profile } from './Profile'

export default class Description extends Component {
    render() {
        const {history} = this.props

        return (
            <div>
                <Profile history = {history} />
            </div>
        )
    }
}
