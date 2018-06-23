//packages
import React from 'react';
import ReactDOM from 'react-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faLongArrowAltRight,faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter} from 'react-router-dom';
//components
import Shell from './app/shell';
//code
library.add(fab,faLongArrowAltRight,faLongArrowAltLeft)
const Mount=document.getElementById('root');
const Application=(
    <BrowserRouter>
        <Shell/>
    </BrowserRouter>
);
ReactDOM.render(Application,Mount);