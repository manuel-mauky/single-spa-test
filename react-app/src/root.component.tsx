import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Something} from './something';
import {Other} from './other';

export const Root: FC = () => (
    <Router>
        <h1>React App</h1>
        <p>React Routes:</p>
        <ul>
            <li><Link to="/react/something">Something</Link></li>
            <li><Link to="/react/other">Other</Link></li>
            <li><Link to="/angular">Link to Angular app</Link></li>
        </ul>

        <Switch>
            <Route path="/react/something">
                <Something/>
            </Route>
            <Route path="/react/other">
                <Other/>
            </Route>
        </Switch>
    </Router>
)
