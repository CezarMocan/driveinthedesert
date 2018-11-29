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
      <div className="image-center-content">
        <a href=""><img src="https://i.imgur.com/49UWEmA.jpg" className="participant-image"/></a>
        <a href="https://rooted.nyc/"><img src="https://i.imgur.com/pmd6JK7.png" className="participant-image"/></a>
      </div>
    )
  }
}

