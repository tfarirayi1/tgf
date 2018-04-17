//packages
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppContainer from './app/AppContainer'
//code
const $root=document.getElementById('root')
const App=<BrowserRouter><AppContainer/></BrowserRouter>
ReactDOM.render(App,$root)