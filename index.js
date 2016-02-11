import React from 'react'
import ReactDOM from 'react-dom'
import APP from './components/APP'
import recipies from './data/recipies'

window.React = React;
ReactDOM.render(<APP recipies={recipies} />, document.getElementById("react-container"));