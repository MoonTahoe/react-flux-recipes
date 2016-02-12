import React from 'react'
import ReactDOM from 'react-dom'
import APP from './components/APP'
import data from '!json!./data/recipes.json'

window.React = React;
ReactDOM.render(<APP recipies={data} />, document.getElementById("react-container"));