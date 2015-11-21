import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import keycode from 'keycode'
import Year from '../components/Year.jsx'
import * as SlideActions from '../actions/slides'

class App extends Component {

  constructor (props, context) {
    super(props, context);
    ['handleKeyUp'].forEach(fn => this[fn] = this[fn].bind(this))
  }

  handleKeyUp (e) {
    const { actions } = this.props

    switch (keycode(e)) {
      case 'down': {
        actions.nextSlide()
        break
      }
      case 'up': {
        actions.prevSlide()
        break
      }

      case 'right': {
        actions.nextHint()
        break
      }
      case 'left': {
        actions.prevHint()
        break
      }

      // default:
      //   console.log(keycode(e))
    }
  }

  componentDidMount () {
    document.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.handleKeyUp)
  }

  render () {
    const { slideState } = this.props
    return (
      <div className='full-size'>
      {
        this.props.years.map((year, i) =>
          <Year
            key={year.year}
            {...year}
            slideState={slideState}
            index={i}
            />
        )
      }
      </div>
    )
  }
}

App.propTypes = {
  years: PropTypes.array.isRequired,
  slideState: PropTypes.object.isRequired,
  actions: React.PropTypes.objectOf(React.PropTypes.func).isRequired
}

function mapStateToProps (state) {
  return {
    slideState: state.slides
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(SlideActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
