import React from 'react'
import ReactDOM from 'react-dom'
import Blobs from '../assets/blobs.svg'
import Logo from './Logo.jsx'
import Description from './Description.jsx'
import Path1 from '../assets/path_1.svg'
import Path2 from '../assets/path_2.svg'
import Path3 from '../assets/path_3.svg'
import Path4 from '../assets/path_4.svg'
import Path5 from '../assets/path_5.svg'
import Content from './contents.json'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      currentSelection: 0
    }
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }

  componentDidMount() {
    $("#text1").click(() => this.setState({ currentSelection: 0}))
    $("#text2").click(() => this.setState({ currentSelection: 1}))
    $("#text3").click(() => this.setState({ currentSelection: 2}))
    $("#text4").click(() => this.setState({ currentSelection: 3}))
    $("#text5").click(() => this.setState({ currentSelection: 4}))
  }

  render() {
    const { windowWidth, windowHeight, currentSelection } = this.state
    const { TEXTS } = Content
    const { name, link, text } = TEXTS[currentSelection]
    return (
      <div className="main-container">      
        <Blobs className="blobs" width={windowWidth + 30}/>
        <Logo/>
        <Path1 className="path path-1"/>
        <Path2 className="path path-2"/>
        <Path3 className="path path-3"/>
        <Path4 className="path path-4"/>
        <Path5 className="path path-5"/>
        <Description text={text} name={name} url={link} />
      </div>
    )
  }
}

