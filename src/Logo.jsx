import React from 'react'
import Logo from '../assets/logo_blue.svg'
import LogoBlob from '../assets/yellow_blob_1.svg'

export default class LogoComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="logo-container">
        <LogoBlob className="logo-blob"/>
        <Logo className="logo"/>
      </div>
    )
  }
}

