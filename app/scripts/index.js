import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App.jsx'
import years from './years'
import configureStore from './store/configureStore'

import '../styles/app.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <App {...years}/>
  </Provider>,
  document.getElementById('app')
)
