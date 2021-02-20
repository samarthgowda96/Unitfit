import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Registration from "../components/Registration"


function RegistrationRoute(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to ='/signup/sam'>signup</Link>
                    </li>
                </ul>
            <Switch>
                <Route exact path ='/signup/:name'component={Registration}/>
            </Switch>
            </div>
        </Router>
    )
}

export default RegistrationRoute;