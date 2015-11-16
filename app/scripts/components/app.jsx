import React, {Component} from 'react'
import Year from './year.jsx'

export default class App extends Component {
  render () {
    return (
      <div className='full-size'>
      {
        this.props.years.map((year, i) =>
          <Year
            key={year.year}
            {...year}
            index={i}
            />

        )
      }
      </div>
    )
  }
}

App.propTypes = {
  years: React.PropTypes.array.isRequired
}
