import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {LoginModals} from '../Components/Modals/LoginModals.jsx'


export default class AllRoutes extends Component {
    render() {
        return (
            <div>
                <Route path = "/createAccount" render = {<LoginModals />} />
            </div>
        )
    }
}
