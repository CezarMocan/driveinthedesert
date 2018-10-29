import React from 'react'
import Logo from '../assets/logo_blue.svg'
import DescriptionBlob from '../assets/yellow_blob_2.svg'

export default class DescriptionComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, name, url } = this.props
    return (
      <div className="description-container">
        <DescriptionBlob className="description-blob"/>
        <div className="description-text-container">
          <div className="description-text-name">
            {name}<br/>
            <a className="description-link" href={url} target="__blank">{url}</a>
          </div>
          <div className="description-text-content">
            {text}
          </div>
        </div>
      </div>
    )
  }
}

