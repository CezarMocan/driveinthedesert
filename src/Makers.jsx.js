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
            <div className="participant-name">/imalinz/<span className="mono">jewelry</span></div>
            <div className="participant-text">
              IMALINZ is a jewellery brand established in 2018. Each piece is made by hand in Bucharest, Romania by master artisans using rare metals, pearls & stones from all over the world.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/imalinz/" target="__blank">instagram</a>&ensp;<a href="http://www.imalinz.com" target="__blank">website</a>
            </div>

            <div className="participant-name">/virtu/<span className="mono">clothing</span></div>
            <div className="participant-text">
              Virtu envisions a world where unnecessary production of goods isn’t an excuse to damage the environment—a world where underpaying workers isn’t acceptable in profitable industries.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/virturocks/" target="__blank">instagram</a>&ensp;<a href="http://www.virtu.rocks/" target="__blank">website</a>
            </div>

            <div className="participant-name">/animamundi/<span className="mono">powders&elixirs</span></div>
            <div className="participant-text">
              Anima Mundi Apothecary is composed of the most pristine, and medicinal botanicals found in nature.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/animamundiherbals/" target="__blank">instagram</a>&ensp;<a href="http://www.animamundiherbals.com" target="__blank">website</a>
            </div>

            <div className="participant-name">/ttanti watches/<span className="mono">watches</span></div>
            <div className="participant-text">
              TTANTI is a watch  that  combines  the  long  Swiss  tradition  of  watchmaking  with  the  noble  materials  available  in  the  South  of  Chile.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/ttantiwatches/" target="__blank">instagram</a>&ensp;<a href="https://www.ttanti.com/" target="__blank">website</a>
            </div>

            <div className="participant-name">/kokili/<span className="mono">vases</span></div>
            <div className="participant-text">
              Founded by So Jung Lee and Gregory Walker, Kokili is driven by creating beautiful objects and experiences, celebrating the optimism of life.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/kokili_projects/" target="__blank">instagram</a>&ensp;<a href="http://www.kokiliprojects.com" target="__blank">website</a>
            </div>

            <div className="participant-name">/risa nishimori/<span className="mono">ceramics</span></div>
            <div className="participant-text">
              Risa Nisimori studied proper wheel throwing in Japan, but her preferred method is Nerikomi, using different mixed clays and creating new and interesting patterns.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/rizaasama/" target="__blank">instagram</a>&ensp;<a href="http://www.risanishimori.com" target="__blank">website</a>
            </div>

            <div className="participant-name">/wymann/<span className="mono">clothing</span></div>
            <div className="participant-text">
              Wymann is a clothing boutique based in Rio, Brazil that produces sustainable clothing made to empower and support eacg woman express their own personalities.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/wymann_rio/" target="__blank">instagram</a>&ensp;<a href="http://www.wymann.com.br/#avery" target="__blank">website</a>
            </div>

            <div className="participant-name">/mozaique/<span className="mono">carpets</span></div>
            <div className="participant-text">
              A boutique social business leveraging high-end design, traditional craft techniques, blockchain technology and bespoke experiences to preserve heritage artisanal work and cultural identity.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/mozaiqueglobal/" target="__blank">instagram</a>&ensp;<a href="http://www.mozaique.co" target="__blank">website</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

