import { Component, createRef, type ReactNode } from 'react'
import SweetScroll from 'sweet-scroll'
import './index.scss'

type ScrollableContainerProps = {
  children?: ReactNode
}

class ScrollableContainer extends Component<ScrollableContainerProps> {
  container = createRef<HTMLDivElement>()
  scroller: SweetScroll | null = null

  componentDidMount() {
    if (!this.container.current) return
    this.scroller = SweetScroll.create(
      {
        trigger: "a[href^='#']",
      },
      this.container.current
    )
  }

  componentWillUnmount() {
    this.scroller?.destroy()
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
