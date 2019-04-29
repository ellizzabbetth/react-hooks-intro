import React from 'react';
import ReactDOM from 'react-dom';

//import App from './AppFunction';
//import App from './AppClass';
///import App from './Login';
import App from './Register';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
