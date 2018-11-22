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
            <div className="participant-name">/sabina gal/<span className="mono">short film</span></div>
            <div className="participant-text">
              Sabina Gal is a Romanian writer and filmmaker living in New York City.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/sabina.gal/" target="__blank">instagram</a>&ensp;<a href="http://sabinagal.com" target="__blank">website</a>
            </div>


            <div className="participant-name">/ethan race/<span className="mono">short film</span></div>
            <div className="participant-text">
              Ethan Race is a Scottish-born experimental filmmaker based in New York City.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/ethan.race/" target="__blank">instagram</a>&ensp;<a href="http://www.ethanrace.com" target="__blank">website</a>
            </div>


            <div className="participant-name">/canyon studio/<span className="mono">painting</span></div>
            <div className="participant-text">
              Canyon Studio creates collaborative pieces celebrating uniquely American landscapes.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/canyon_studio/" target="__blank">instagram</a>&ensp;<a href="https://www.canyon-studio.com/paintings-1/" target="__blank">website</a>
            </div>


            <div className="participant-name">/artistafterhours/<span className="mono">painting</span></div>
            <div className="participant-text">
              Alana is a founder, artist, and investor who is converging the worlds of art and venture.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/artistafterhours/" target="__blank">instagram</a>&ensp;<a href="http://www.alanapodreciks.com" target="__blank">website</a>
            </div>


            <div className="participant-name">/michaela trimble/<span className="mono">photography</span></div>
            <div className="participant-text">
              Michaela is a contributor at T: The New York Times Magazine, Vogue, Departures, Travel + Leisure, GQ, Men's Journal, National Geographic, Robb Report, Conde Nast Traveller UK, Hemispheres, American Way, and more.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/michaelatrimble/" target="__blank">instagram</a>&ensp;<a href="http://www.michaelatrimble.com" target="__blank">website</a>
            </div>


            <div className="participant-name">/quoted magazine/<span className="mono">magazine</span></div>
            <div className="participant-text">
              Quoted Magazine is a love letter to New York from the people living here.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/quoted_magazine/" target="__blank">instagram</a>&ensp;<a href="http://www.quotedmagazine.com" target="__blank">website</a>
            </div>

            <div className="participant-name">/as promised/<span className="mono">magazine</span></div>
            <div className="participant-text">
              As Promised is an idea—an alternative to the current situation. A borderless aspirational life we would all like to live. A thoughtful livelihood that is driven by wellness, respect, and beauty.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/aspromisedmag/" target="__blank">instagram</a>&ensp;<a href="http://www.as-promised.com" target="__blank">website</a>
            </div>

            <div className="participant-name">/tina b foto/<span className="mono">photography</span></div>
            <div className="participant-text">
            Tina is a photographer whose work was published by Global Citizen, Huffington Post, Buzzfeed, ABC news and a number of other publications.
            </div>
            <div className="participant-links">
              <a href="https://www.instagram.com/tinabfoto/" target="__blank">instagram</a>&ensp;<a href="http://www.tinabfoto.com" target="__blank">website</a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

