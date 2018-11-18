import React from 'react'
import Logo from '../assets/logo_blue.svg'
import DescriptionBlob from '../assets/yellow_blob_2.svg'

export default class WhatIsDitd extends React.Component {
  constructor(props) {
    super(props)
  }

  // <DescriptionBlob className="description-blob"/>

  render() {
    return (
      <div className="description-container" style={{marginTop: '0'}}>
        <div className="description-text-container">
          <div className="description-text-name">
          </div>
          <div className="description-text-content large">
          Drive in the Desert, or simply DITD, is a creative pop-up that brings together artists and makers to explore unique products, discover personal and artistic journeys and create gifting experiences.<br/>
          <br/>
          DITD started out during an epic Drive In The Arizona Desert as a tribute to our mutual love for sustainable craft and genuine connections.<br/>
          <br/>
          Ksenia & Beatrice<br/>
          </div>
        </div>
      </div>
    )
  }
}

