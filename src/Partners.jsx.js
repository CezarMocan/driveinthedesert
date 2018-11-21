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
          <div className="description-text-content">
            <img src="https://i.imgur.com/49UWEmA.jpg" className="participant-image"/>
          </div>
        </div>
      </div>
    )
  }
}

