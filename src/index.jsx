import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

class MobxApp extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} ></Route>
                    <Route path="/first" component={Home} ></Route>
                    <Route path="/second" component={Home} ></Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<MobxApp />, document.getElementById('mobx-app'));