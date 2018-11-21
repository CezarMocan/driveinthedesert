import React from 'react'
import Logo from '../assets/logo_blue.svg'
import DescriptionBlob from '../assets/yellow_blob_2.svg'

export default class Artists extends React.Component {
  constructor(props) {
    super(props)
  }

  // <DescriptionBlob className="description-blob"/>

  render() {
    return (
      <div className="description-container">
        <div className="description-text-container">
          <div className="description-text-name">
          </div>
          <div className="description-text-content">
            <div class="participant-name">imalinz/<span class="mono">jewelry</span></div>
            <div class="participant-text">
              IMALINZ is a jewellery brand established in 2018. Each piece is made by hand in Bucharest, Romania by master artisans using rare metals, pearls & stones from all over the world.
            </div>
            <div class="participant-links">
              <a href="https://www.instagram.com/imalinz/" target="__blank">instagram</a>&ensp;<a href="http://www.imalinz.com" target="__blank">website</a>
            </div>

            <div class="participant-name">animamundi/<span class="mono">powders&elixirs</span></div>
            <div class="participant-text">
              Anima Mundi Apothecary is composed of the most pristine, and medicinal botanicals found in nature.
            </div>
            <div class="participant-links">
              <a href="https://www.instagram.com/animamundiherbals/" target="__blank">instagram</a>
            </div>

            <div class="participant-name">ttanti watches/<span class="mono">watches</span></div>
            <div class="participant-text">
              TTANTI is a watch  that  combines  the  long  Swiss  tradition  of  watchmaking  with  the  noble  materials  available  in  the  South  of  Chile.
            </div>
            <div class="participant-links">
              <a href="https://www.instagram.com/ttantiwatches/" target="__blank">instagram</a>
            </div>

            <div class="participant-name">kokili/<span class="mono">vases</span></div>
            <div class="participant-text">
              Founded by So Jung Lee and Gregory Walker, Kokili is driven by creating beautiful objects and experiences, celebrating the optimism of life.
            </div>
            <div class="participant-links">

            </div>

          </div>
        </div>
      </div>
    )
  }
}

