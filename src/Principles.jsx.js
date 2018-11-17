import React from 'react'
import Logo from '../assets/logo_blue.svg'
import DescriptionBlob from '../assets/yellow_blob_2.svg'

export default class Principles extends React.Component {
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
            purposeful stories/<br/>
            sustainable production/<br/>
            pure colors/<br/>
            raw materials/<br/>
            essential shapes<br/>
          </div>
        </div>
      </div>
    )
  }
}

