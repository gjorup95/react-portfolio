import React from 'react'
import SweetScroll from 'sweet-scroll'
import './index.scss'
class ScrollableContainer extends React.Component {
  container = React.createRef()
  scroller = null

  componentDidMount() {
    this.scroller = SweetScroll.create(
      {
        trigger: "a[href^='#']",
      },
      this.container.current
    )
  }

  componentWillUnmount() {
    this.scroller.destroy()
  }

  render() {
    const { children } = this.props

    return (
      <div
        className="scroller"
        ref={this.container}
        style={{
          overflowX: 'hidden',
          overflowY: 'auto',
          width: 'inherit',
          height: '100%',
        }}
      >
        {children}
      </div>
    )
  }
}

export default ScrollableContainer
