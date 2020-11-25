import React, { Component } from 'react'
import { Home } from '../Component/Home/Home'
import {Route,Switch} from "react-router-dom"
import { SignUp } from '../Component/SignUp/SignUp'
import { Profile } from '../Component/Profile/Profile'
import { UserProfile } from '../Component/UserProfile/UserProfile'
import MainFeature from '../Component/Profile/MainFeature'
import Description from '../Component/Profile/Description'
import {ViewProfileInfo} from "../Component/ProfileInfo/ViewParticularProfile"


export class AllRoutes extends Component {
     
    render() {
        return (
            <div>
                <Switch>
                <Route path="/" exact render={(props)=><Home {...props}/>}/>
                <Route path="/app/onboarding/" exact render={(props)=><SignUp {...props}/>} />
                <Route path="/app/recs" exact render={(props)=><Profile {...props}/>} />
                <Route path="/app/recs/profile" exact render={(props)=><Description {...props}/>} />
                <Route path="/app/profile" exact render={()=><UserProfile/>} />
                </Switch>
            </div>
        )
    }
}
