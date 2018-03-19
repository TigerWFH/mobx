import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router';

class MobxApp extends React.Component {
    render() {
        return <div>
            {
                "mobx-app"
            }
        </div>
    }
}

ReactDOM.render(<MobxApp />, document.getElementById('mobx-app'));