import React, { Component } from "react"

class MarsImage extends Component {
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
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=EZlD2gwS3nwMcn2EbaATVg0VFP7vKFgINM4Z2HOw"
    )
      .then(results => results.json())
      //   .then(results => console.log(results.latest_photos))
      .then(results =>
        this.setState({ items: results.latest_photos.slice(0, 6) })
      )
  }

  render() {
    return (
      <ul className="grid">
        
        {this.state.items.map(function(item, index) {
          return (
            <div class="Mars">
              <h6>{`Taken with ${item.camera.full_name}`}</h6>
              <img src={item.img_src} alt={item.camera.full_name} />
              <p>{item.earth_date}</p>
            </div>
          )
        })}
      </ul>
    )
  }
}
export default MarsImage
