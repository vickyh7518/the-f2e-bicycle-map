
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App.jsx';

// 開啟 HMR 支持 (全部模組)
if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));