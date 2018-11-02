import React from 'react'
import Logo from '../assets/logo_blue.svg'
import DescriptionBlob from '../assets/yellow_blob_2.svg'

export default class GetInvolved extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="description-container">
        <DescriptionBlob className="description-blob"/>
        <div className="description-text-container">
          <div className="description-text-name">
          We would love for you to be part of our journey! Here is how you can get involved: 
          </div>
          <div className="description-text-content">
            1. collaborate with us in creating DITD product capsule; <br/>
            2. propose your products that best encapsulate the values and design principles we want to promote; <br/>
            3. join our evening conversations and events and make new friends<br/>
            <br/>
            If you are interested in learning more, <a href="mailto:driveinthedesert@gmail.com">get in touch</a>! 
          </div>
        </div>
      </div>
    )
  }
}

