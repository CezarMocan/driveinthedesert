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
            ceramics & scuplture/ <br/>
            photography & prints/ <br/>
            jewelry & accessories/ <br/>
            scents & elixirs/ <br/>
            + a little bit of Fashion<br/>
          </div>
        </div>
      </div>
    )
  }
}

