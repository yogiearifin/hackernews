import React from "react"
import { Route, Switch, Router } from "react-router-dom"
import history from './history';
import Hackernews from "../components/Hackernews"
import Bestnews from "../components/Bestnews"
import Jobnews from "../components/Jobnews"

const Routers = () => {
    return (
        <Router history={history}>
            <Switch >
                <Route path="/" exact component={Hackernews} />
                <Route path="/best-news" exact component={Bestnews} />
                <Route path="/jobs" exact component={Jobnews} />
            </Switch>
        </Router>
    )
}

export default Routers