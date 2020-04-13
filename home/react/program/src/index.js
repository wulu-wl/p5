import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

//先导入 store文件
import store from '../src/store'

//导入react-redux
import { Provider } from "react-redux"
ReactDOM.render(
    <Provider store={store}><App /></Provider>,

 document.getElementById('root'));
serviceWorker.unregister();
