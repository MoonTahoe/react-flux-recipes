import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './components/Menu'
import data from '!json!./data/recipes.json'

window.React = React;
ReactDOM.render(<Menu recipes={data} />, document.getElementById("react-container"));