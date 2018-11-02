import React from 'react'
import Logo from '../assets/logo_blue.svg'
import DescriptionBlob from '../assets/yellow_blob_2.svg'

export default class Principles extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="description-container">
        <DescriptionBlob className="description-blob"/>
        <div className="description-text-container">
          <div className="description-text-name">
          </div>
          <div className="description-text-content large">
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

