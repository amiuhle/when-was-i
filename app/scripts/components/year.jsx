import React, {Component} from 'react'

export default class Year extends Component {
  render () {
    return (
      <section className='year'>
        <h2 className='year__number'>{this.props.year}</h2>
        <ul>
          {
            this.props.hints.map((hint, i) => <li key={i}>{hint}</li>)
          }
        </ul>
      </section>
    )
  }
}

Year.propTypes = {
  year: React.PropTypes.number,
  hints: React.PropTypes.array
}
