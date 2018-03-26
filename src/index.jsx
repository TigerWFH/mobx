import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Demo from './pages/demo';
import About from './pages/about';
import Home from './pages/home';

class MobxApp extends React.Component {
    app = () => {

    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact={true} strict={true} component={Home} ></Route>
                    <Route path="/demo" exact={true} strict={true} component={Demo} ></Route>
                    <Route path="/about" exact={true} strict={true} component={About} ></Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<MobxApp />, document.getElementById('mobx-app'));