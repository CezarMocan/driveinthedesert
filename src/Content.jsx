import React from 'react'
import DescriptionBlob from '../assets/yellow_blob_2.svg'
import Logo from './Logo.jsx'

export default class GetInvolved extends React.Component {
  constructor(props) {
    super(props)
  }

  // <DescriptionBlob className="description-blob"/>

  render() {
    const { isOpen, children, onClose } = this.props
    return (
      <div className={`content-container ${isOpen ? '' : 'closed'}`}>
        {children}
      </div>
    )
  }
}

//<div className='content-close-btn' onClick={onClose} >✕</div>

