import React, { Component } from "react"

class ImageContainer extends Component {
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
      "https://api.nasa.gov/EPIC/api/natural?api_key=EZlD2gwS3nwMcn2EbaATVg0VFP7vKFgINM4Z2HOw"
    )
      .then(results => results.json())
      // .then(results => console.log(results))
      .then(results => this.setState({ items: results.slice(0, 4) }))
  }

  render() {
    return (
      <ul className="grid">
           
        {this.state.items.map(function(item, index) {
          return (
            <div class="Earth">
              <img
                src={
                  "https://api.nasa.gov/EPIC/archive/natural/" +
                  item.date.substring(0, 4) +
                  "/" +
                  item.date.substring(5, 7) +
                  "/" +
                  item.date.substring(8, 10) +
                  "/png/" +
                  item.image +
                  ".png?api_key=EZlD2gwS3nwMcn2EbaATVg0VFP7vKFgINM4Z2HOw"
                }
                alt={item.caption}
              />
              <h6>
                {item.date.substring(0, 4) +
                  "/" +
                  item.date.substring(5, 7) +
                  "/" +
                  item.date.substring(8, 10)}
              </h6>
              <div className="desc-holder">
              <div className="sun-position">
                <p>{"Sun Postion: "}</p>
                <p>{"x: " + item.sun_j2000_position.x}</p>
                <p>{"y: " + item.sun_j2000_position.y}</p>
              </div>
              <div className="moon-position">
                <p>{"Lunar Postion: "}</p>
                <p>{"x: " + item.lunar_j2000_position.x}</p>
                <p>{"y: " + item.lunar_j2000_position.y}</p>
              </div>
              <div className="coordinates">
                <p>{"Coordinates: "}</p>
                <p>{"x: " + item.lunar_j2000_position.x}</p>
                <p>{"y: " + item.lunar_j2000_position.y}</p>
              </div>
              </div>
            </div>
          )
        })}
      </ul>
    )
  }
}
export default ImageContainer
