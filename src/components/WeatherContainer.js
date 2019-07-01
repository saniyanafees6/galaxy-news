import React, { Component } from "react"
import Markdown from "react-remarkable"

class WeatherContainer extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }
  componentDidMount() {
    this.getItems()
  }
  getItems() {
    fetch(
      "https://api.nasa.gov/DONKI/notifications?type=all&api_key=EZlD2gwS3nwMcn2EbaATVg0VFP7vKFgINM4Z2HOw"
    )
      .then(results => results.json())
      .then(results => this.setState({ items: results.slice(0, 1) }))
  }

  render() {
    return (
      <ul>
        {this.state.items.map(function(item, index) {
          return (
            <div className="weather">
              <h2>{item.messageType}</h2>
              <h6>{item.messageURL}</h6>
              <h6>{item.messageIssueTime}</h6>

              <Markdown>{item.messageBody}</Markdown>
            </div>
          )
        })}
      </ul>
    )
  }
}
export default WeatherContainer
//   https://api.nasa.gov/planetary/apod?api_key=nxKl8yTvpvsXEqRz06mTPnn29uyckFmFCYrnqEIz
