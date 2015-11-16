import React, {Component} from 'react'

export default class Year extends Component {

  constructor () {
    super()
    this.state = {
      activeHint: 0
    }
  }

  render () {
    let classNames = ['year', 'slide']
    if (this.props.index === 0) {
      classNames.push('slide--active')
    }
    return (
      <section className={classNames.join(' ')}>
        <h2 className='year__number'>{this.props.year}</h2>
        <ul className='year__hints'>
          {
            this.props.hints.map((hint, i) => <li key={i}>{hint}</li>)
          }
        </ul>
      </section>
    )
  }
}

Year.propTypes = {
  index: React.PropTypes.number,
  year: React.PropTypes.number,
  hints: React.PropTypes.array
}
