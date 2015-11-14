import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'
import years from './years'

import {} from '../styles/app.scss'

ReactDOM.render(
  <App {...years}/>,
  document.getElementById('app')
)
