import React, { Component, PropTypes } from 'react'

export default class Year extends Component {

  constructor () {
    super()
    this.state = {
      activeHint: 0
    }
  }

  render () {
    let classNames = ['year', 'slide']
    const { index, slideState } = this.props
    const activeSlide = slideState.slide
    const activeHint = slideState.hint
    const isActiveSlide = index === activeSlide
    if (isActiveSlide) {
      classNames.push('slide--active')
    }
    return (
      <section className={classNames.join(' ')}>
        <h2 className='year__number'>{this.props.year}</h2>
        <ul className='year__hints ui-list'>
          {
            this.props.hints.map((hint, i) => {
              let classNames = ['hint']
              if(isActiveSlide) {
                if (i < activeHint) {
                  classNames.push('hint--shown')
                }
                if (i === activeHint) {
                  classNames.push('hint--active')
                }
              }
              return (
                <li key={i} className={classNames.join(' ')}>
                  {hint}
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

Year.propTypes = {
  index: PropTypes.number,
  year: PropTypes.number,
  hints: PropTypes.array,
  slideState: PropTypes.object
}
