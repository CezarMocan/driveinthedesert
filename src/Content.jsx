import React from 'react'
import Logo from '../assets/logo_blue.svg'
import DescriptionBlob from '../assets/yellow_blob_2.svg'

export default class GetInvolved extends React.Component {
  constructor(props) {
    super(props)
  }

  // <DescriptionBlob className="description-blob"/>

  render() {
    const { isOpen, children, onClose } = this.props
    return (
      <div className={`content-container ${isOpen ? '' : 'closed'}`} onClick={onClose}>
        <div className='content-close-btn'>✕</div>
        {children}
      </div>
    )
  }
}

