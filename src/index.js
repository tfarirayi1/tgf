//packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//components
import Shell from './app/shell';
//code
const Mount=document.getElementById('root');
const Application=(
    <BrowserRouter>
        <Shell/>
    </BrowserRouter>
);
ReactDOM.render(Application,Mount);