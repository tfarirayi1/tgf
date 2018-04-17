//packages
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Shell from './app/Shell'
//code
const $root=document.getElementById('root')
const App=<BrowserRouter><Shell/></BrowserRouter>
ReactDOM.render(App,$root)