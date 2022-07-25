import './index.scss'
import * as Scroll from 'react-scroll'
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
import React from 'react'
import PortfolioLoadingScreen from '../PortfolioLoadingScreen'
import Portfolio from '../Portfolio'

class ScrollPage extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments)
    })
    Events.scrollEvent.register('end', function () {
      console.log('end', arguments)
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }
  render() {
    return (
      <>
        <PortfolioLoadingScreen />
      </>
    )
  }
}
export default ScrollPage
