import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Year from '../components/Year.jsx'
import * as SlideActions from '../actions/slides'

class App extends Component {

  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    const { actions } = this.props
    document.addEventListener('keyup', actions.nextSlide)
  }

  componentWillUnmount() {

  }

  render () {
    const { slides, actions } = this.props
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
  years: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    slides: state.slides
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SlideActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
