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
      <div className="description-container">
        <div className="description-text-container">
          <div className="description-text-name">
          </div>
          <div className="description-text-content large">
          Drive in the Desert, or simply DITD, is a creative pop-up that brings together artists and makers to explore unique products, discover personal journeys and create gifting experiences.<br/>
          <div className="spacing large"></div>
          DITD started out during an epic Drive In The Arizona Desert as a tribute to our mutual love for sustainable craft and genuine connections.<br/>
          <div className="spacing large"></div>
          These are the design principles we stand by:<br/>
          <div className="spacing large"></div>
          1—purposeful stories<br/>
          <div className="spacing"></div>
          2—sustainable production<br/>
          <div className="spacing"></div>
          3—pure colors<br/>
          <div className="spacing"></div>
          4—raw materials<br/>
          <div className="spacing"></div>
          5—simple shapes<br/>
          <div className="spacing large"></div><div className="spacing large"></div><div className="spacing large"></div>
          Ksenia & Beatrice<br/>
          </div>
        </div>
      </div>
    )
  }
}

