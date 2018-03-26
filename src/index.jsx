import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Demo from './pages/demo';
import About from './pages/about';
import { Home } from './pages/home';

class MobxApp extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} ></Route>
                    <Route path="/demo" component={Home} ></Route>
                    <Route path="/about" component={Home} ></Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<MobxApp />, document.getElementById('mobx-app'));