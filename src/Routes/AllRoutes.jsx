import React, { Component } from 'react'
import { Home } from '../Component/Home/Home'
import {Route,Switch} from "react-router-dom"
import { SignUp } from '../Component/SignUp/SignUp'
import { Profile } from '../Component/Profile/Profile'
import { UserProfile } from '../Component/UserProfile/UserProfile'

export class AllRoutes extends Component {
     
    render() {
        return (
            <div>
                <Switch>
                <Route path="/" exact render={(props)=><Home {...props}/>}/>
                <Route path="/app/onboarding/" exact render={(props)=><SignUp {...props}/>} />
                <Route path="/app/recs" exact render={(props)=><Profile {...props}/>} />
                <Route path="/app/profile" exact render={()=><UserProfile/>} />
                </Switch>
            </div>
        )
    }
}
