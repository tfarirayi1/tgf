//packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//components
import Shell from './app/shell';
//code
const $root=document.getElementById('root')
const app=<BrowserRouter><Shell/></BrowserRouter>
ReactDOM.render(app,$root)