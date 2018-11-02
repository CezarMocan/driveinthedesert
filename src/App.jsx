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
import Path6 from '../assets/path_6.svg'
import Path7 from '../assets/path_7.svg'
import Path8 from '../assets/path_8.svg'
import Path9 from '../assets/path_9.svg'
import Path10 from '../assets/path_10.svg'
import Content from './contents.json'
import WhatIsDitd from './WhatIsDitd.jsx'
import Principles from './Principles.jsx'
import Products from './Products.jsx'
import GetInvolved from './GetInvolved.jsx'

const MENU = {
  ABOUT: 'about',
  PRINCIPLES: 'principles',
  PRODUCTS: 'products',
  GET_INVOLVED: 'get_involved'
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      currentSelection: 0,
      currentMenuSelection: MENU.ABOUT
    }
    window.addEventListener('resize', this.onResize.bind(this))

    this.onAboutClick = this.onAboutClick.bind(this)
    this.onPrinciplesClick = this.onPrinciplesClick.bind(this)
    this.onProductsClick = this.onProductsClick.bind(this)
    this.onGetInvolvedClick = this.onGetInvolvedClick.bind(this)
  }

  onResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }

  componentDidMount() {
    // $("#text1").click(() => this.setState({ currentSelection: 0}))
    // $("#text2").click(() => this.setState({ currentSelection: 1}))
    // $("#text3").click(() => this.setState({ currentSelection: 2}))
    // $("#text4").click(() => this.setState({ currentSelection: 3}))
    // $("#text5").click(() => this.setState({ currentSelection: 4}))
  }

  onAboutClick() {
    this.setState({ currentMenuSelection: MENU.ABOUT })
  }

  onPrinciplesClick() {
    this.setState({ currentMenuSelection: MENU.PRINCIPLES })
  }

  onProductsClick() {
    this.setState({ currentMenuSelection: MENU.PRODUCTS })
  }

  onGetInvolvedClick() {
    this.setState({ currentMenuSelection: MENU.GET_INVOLVED })
  }

  render() {
    const { windowWidth, windowHeight, currentSelection, currentMenuSelection } = this.state
    const { TEXTS } = Content
    const { name, link, text } = TEXTS[currentSelection]
    return (
      <div className="main-container">      
        <Blobs className="blobs" width={windowWidth + 30}/>

        <Path1 className="path path-1"/>
        <Path2 className="path path-2"/>
        <Path3 className="path path-3"/>
        <Path4 className="path path-4"/>
        <Path5 className="path path-5"/>
        <Path6 className="path path-6"/>
        <Path7 className="path path-7"/>
        <Path8 className="path path-8"/>
        <Path9 className="path path-9"/>
        <Path10 className="path path-10"/>

        <Blobs className="blobs" width={windowWidth + 30}/>
        <Blobs className="blobs" width={windowWidth + 30} style={{position: 'fixed', top: 0, left: 0}}/>
        
        <Logo/>
        { currentMenuSelection == MENU.ABOUT && <WhatIsDitd/> }
        { currentMenuSelection == MENU.PRINCIPLES && <Principles/> }
        { currentMenuSelection == MENU.PRODUCTS && <Products/> }
        { currentMenuSelection == MENU.GET_INVOLVED && <GetInvolved/> }
        <div className="description-menu">
          <div className="menu-item">208 Bowery, NY</div>
          <div className="menu-item">Nov. 29—Dec. 2</div>
          <div className="menu-item">—</div>
          <div className="menu-item" onClick={this.onAboutClick}>about</div>
          <div className="menu-item" onClick={this.onPrinciplesClick}>principles</div>
          <div className="menu-item" onClick={this.onProductsClick}>products</div>
          <div className="menu-item" onClick={this.onGetInvolvedClick}>get involved</div>
        </div>

      </div>
    )
  }
}

// <Description text={text} name={name} url={link} />

