import * as React from 'react';
import {observer} from 'mobx-react';

import modal from './modals';

@observer
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        modal.setName("mokey");
    }
    render() {
        return (
            <div>
                {
                    modal.getName()
                }
            </div>
        )
    }
}

export default Home;