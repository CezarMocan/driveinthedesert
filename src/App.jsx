import React from 'react'
import ReactDOM from 'react-dom'
import Blobs from '../assets/blobs.svg'
import Logo from '../assets/logo_blue.svg'
import Path1 from '../assets/path_1.svg'
import Path2 from '../assets/path_2.svg'
import Path3 from '../assets/path_3.svg'
import Path4 from '../assets/path_4.svg'
import Path5 from '../assets/path_5.svg'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }

  render() {
    const { windowWidth, windowHeight } = this.state
    console.log(windowWidth, windowHeight)
    return (
      <div className="main-container">      
        <Blobs className="blobs" width={windowWidth + 30}/>
        <Logo className="logo"/>
        <Path1 className="path path-1"/>
        <Path2 className="path path-2"/>
        <Path3 className="path path-3"/>
        <Path4 className="path path-4"/>
        <Path5 className="path path-5"/>
      </div>
    )
  }
}

