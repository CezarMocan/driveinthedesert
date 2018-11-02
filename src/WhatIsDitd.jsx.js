import React from 'react'
import Logo from '../assets/logo_blue.svg'
import DescriptionBlob from '../assets/yellow_blob_2.svg'

export default class WhatIsDitd extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="description-container">
        <DescriptionBlob className="description-blob"/>        
        <div className="description-text-container">
          <div className="description-text-name">
            Drive in the Desert, or simply DITD, is a creative pop-up that brings together artists and makers to explore unique products, discover personal and artistic journeys and create gifting experiences.<br/>
            <br/>
            DITD started out during an epic Drive In The Arizona Desert as a tribute to our mutual love for sustainable craft and genuine connections.<br/>
          </div>
          <div className="description-text-content">
          Ksenia & Beatrice<br/>
          <a href="mailto:driveinthedesert@gmail.com">driveinthedesert@gmail.com</a>
          </div>
        </div>
      </div>
    )
  }
}

