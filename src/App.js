import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './Router/Route'; //路由配置
import store from './Redux/Store/Store';
import injectTapEventPlugin from  "react-tap-event-plugin";
require("./utils/retina");
require("./styles/base");
injectTapEventPlugin();
/*
class Roots extends Component {
    render() {
        return (
            <div  className="testClass">adasdfsadfsd</div>
        );
    }
}
render(<Roots   />
       ,document.getElementById('content')
);
*/



render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.getElementById('content')
);
