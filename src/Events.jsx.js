import React from 'react'
import Logo from '../assets/logo_blue.svg'
import DescriptionBlob from '../assets/yellow_blob_2.svg'

export default class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentIndex: 0
    }
    this.content = [
      {
        day: 'Friday, November 30th',
        what: 'Spoken Word'
      },
      {
        day: 'Saturday, December 1st',
        what: 'Visual Arts'
      },
      {
        day: 'Sunday, December 2nd',
        what: 'Female Founders Brunch'
      }
    ]
    this.updateContent = this.updateContent.bind(this)
  }

  updateContent() {
    this.setState({ contentIndex: (this.state.contentIndex + 1) % this.content.length})
  }

  componentDidMount() {
    this._interval = setInterval(this.updateContent, 1000)
  }
  componentWillUnmount() {
    if (this._interval) {
      clearInterval(this._interval)
      this._interval = null
    }
  }
  // <DescriptionBlob className="description-blob"/>

  render() {
    const { contentIndex } = this.state
    const day = this.content[contentIndex].day
    const what = this.content[contentIndex].what
    return (
      <div className="description-container">
        <div className="description-text-container">
          <div className="description-text-content large no-overflow">
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
            {day}—<br/>
            {what}<br/>
          </div>
        </div>
      </div>
    )
  }
}

