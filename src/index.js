//packages
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppShell from './app/AppShell'
//code
const $root=document.getElementById('root')
const App=<BrowserRouter><AppShell/></BrowserRouter>
ReactDOM.render(App,$root)