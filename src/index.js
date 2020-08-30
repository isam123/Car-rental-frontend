import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/SharedComponent/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
