import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tabs from './components/Tabs';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import AA from './components/NavBar/aa';
import UseReducer from './components/UseReducerDemo';
// import "antd/dist/antd.css";
import 'antd/dist/antd.less';

ReactDOM.render(
  <React.StrictMode>
    <UseReducer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
