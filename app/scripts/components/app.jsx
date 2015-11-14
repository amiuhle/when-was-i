import React, {Component} from 'react'
import Year from './year.jsx'

export default class App extends Component {
  render () {
    return (
      <div>
      {
        this.props.years.map((year) => <Year key={year.year} {...year} />)
      }
      </div>
    )
  }
}

App.propTypes = {
  years: React.PropTypes.array.isRequired
}
