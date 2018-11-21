import React from 'react'
import Logo from '../assets/logo_blue.svg'
import DescriptionBlob from '../assets/yellow_blob_2.svg'

export default class GetInvolved extends React.Component {
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
          <div className="description-text-content large">
            We would love for you to be part of our journey! If you are an artist or a maker, this is how you can get involved:<br/><br/>
            1—collaborate with us in creating DITD product capsule<br/>
            <div class="spacing large"></div>
            2—propose your products that best encapsulate the values and design principles we share<br/>
            <div class="spacing large"></div>
            3—join our evening conversations and events and make new friends<br/>
            <br/>
            Please <a href="mailto:driveinthedesert@gmail.com">get in touch</a> to learn more! 
          </div>
        </div>
      </div>
    )
  }
}

