import React from 'react'
import ReactDOM from 'react-dom'
import Blobs from '../assets/blobs.svg'
import BlobsPartial from '../assets/blobs_partial.svg'
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
import Artists from './Artists.jsx'
import Makers from './Makers.jsx'
import Partners from './Partners.jsx'
import GetInvolved from './GetInvolved.jsx'
import ContentContainer from './Content.jsx'

const MENU = {
  ABOUT: 'about',
  PRINCIPLES: 'principles',
  ARTISTS: 'artists',
  MAKERS: 'makers',
  PARTNERS: 'partners',
  GET_INVOLVED: 'get_involved',
  CLOSED: 'closed'
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
    this.onArtistsClick = this.onArtistsClick.bind(this)
    this.onMakersClick = this.onMakersClick.bind(this)
    this.onPartnersClick = this.onPartnersClick.bind(this)
    this.onGetInvolvedClick = this.onGetInvolvedClick.bind(this)
    this.onContentClose = this.onContentClose.bind(this)
    this.animateBlobs = this.animateBlobs.bind(this)
    
    this.mScaleX = 2
    this.mScaleY = 2
    this.translateX = 0
    this.translateY = 0
    this.mSgnX = this.mSgnY = 1

    this.pScaleX = 2
    this.pScaleY = 2
    this.pTranslateX = 0
    this.pTranslateY = 0
    this.pSgnX = this.pSgnY = -1    
  }

  onResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }

  animateBlobs() {
    const tS = (new Date().getTime()) / 4000
    const fX = 1 + (Math.sin(tS) / 25)
    const fY = 1 + (Math.sin(tS + 0.2) / 25)
    if (Math.random() < 0.0005) this.mSgnX = -this.mSgnX
    if (Math.random() < 0.001) this.mSgnY = -this.mSgnY
    this.translateX += 0.01 * this.mSgnX
    this.translateY += 0.01 * this.mSgnY    
    $("#blobs-main").css("transform", `scaleX(${this.mScaleX * fX}) scaleY(${this.mScaleY * fY}) translateX(${this.translateX}px) translateY(${this.translateY}px)`)

    const pfX = 1 + (Math.sin(tS - 1) / 30)
    const pfY = 1 + (Math.sin(tS + 2) / 28)
    if (Math.random() < 0.0005) this.pSgnX = -this.mSgnX
    if (Math.random() < 0.0008) this.pSgnY = -this.mSgnY
    this.pTranslateX += 0.008 * this.mSgnX
    this.pTranslateY += 0.012 * this.mSgnY    
    $("#blobs-partial").css("transform", `scaleX(${this.pScaleX * pfX}) scaleY(${this.pScaleY * pfY}) translateX(${this.pTranslateX}px) translateY(${this.pTranslateY}px)`)

    requestAnimationFrame(this.animateBlobs)
  }

  componentDidMount() {
    requestAnimationFrame(this.animateBlobs)
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

  onArtistsClick() {
    this.setState({ currentMenuSelection: MENU.ARTISTS })
  }

  onMakersClick() {
    this.setState({ currentMenuSelection: MENU.MAKERS })
  }

  onPartnersClick() {
    this.setState({ currentMenuSelection: MENU.PARTNERS })
  }

  onGetInvolvedClick() {
    this.setState({ currentMenuSelection: MENU.GET_INVOLVED })
  }

  onContentClose() {
    this.setState({ currentMenuSelection: MENU.CLOSED})
  }
// <BlobsPartial className="blobs" width={windowWidth + 30} style={{position: 'absolute', top: 0, left: 0}}/>        

        // <Blobs className="blobs" width={windowWidth + 30}/>
        // <Blobs className="blobs" width={windowWidth + 30}/>

  render() {
    const { windowWidth, windowHeight, currentSelection, currentMenuSelection } = this.state
    const { TEXTS } = Content
    const { name, link, text } = TEXTS[currentSelection]
    return (
      <div className="main-container">      
        <Blobs id="blobs-main" className="blobs" width={windowWidth + 30}/>

        <Blobs className="blobs" width={windowWidth + 30}/>
        <Blobs className="blobs" width={windowWidth + 30}/>

        <ContentContainer isOpen={currentMenuSelection != MENU.CLOSED} onClose={this.onContentClose}>
          { currentMenuSelection == MENU.ABOUT && <WhatIsDitd/> }
          { currentMenuSelection == MENU.PRINCIPLES && <Principles/> }
          { currentMenuSelection == MENU.ARTISTS && <Artists/> }
          { currentMenuSelection == MENU.MAKERS && <Makers/> }
          { currentMenuSelection == MENU.PARTNERS && <Partners/> }
          { currentMenuSelection == MENU.GET_INVOLVED && <GetInvolved/> }
        </ContentContainer>

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

        <BlobsPartial id="blobs-partial" className="blobs blobs-partial" width={windowWidth + 30} style={{position: 'absolute', top: 0, left: 0, transform: 'translateX(700px) translateY(500px) scale(5)'}}/>

        <div className="description-menu">
          <div className="menu-item">208 Bowery, NY</div>
          <div className="menu-item">Nov. 29—Dec. 2</div>
          <div className="menu-item">—</div>
          <div className="menu-item link" onClick={this.onAboutClick}>about</div>
          <div className="menu-item link" onClick={this.onMakersClick}>makers</div>
          <div className="menu-item link" onClick={this.onArtistsClick}>artists</div>
          <div className="menu-item link" onClick={this.onPartnersClick}>partners</div>
          <div className="menu-item link" onClick={this.onPartnersClick}>events</div>
          <div className="menu-item link" onClick={this.onGetInvolvedClick}>get involved</div>
        </div>

        <Logo/>

        <div className="menu-contact">
          <div className="menu-item link"><a href="mailto:driveinthedesert@gmail.com" target="__blank">email</a></div>
          <div className="menu-item link"><a href="http://instagram.com/drive.in.the.desert" target="__blank">instagram</a></div>
        </div>

      </div>
    )
  }
}

// <Description text={text} name={name} url={link} />

