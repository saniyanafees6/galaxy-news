import React, { Component } from "react"
import NewsCard from "./NewsCard"
import axios from "axios"

class NewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      astronomy: [],
    }
  }

  componentDidMount() {
    const API_KEY = "EZlD2gwS3nwMcn2EbaATVg0VFP7vKFgINM4Z2HOw"
    const END_POINT = "https://api.nasa.gov/planetary/apod?api_key="

    axios
      .get(END_POINT + API_KEY)
      .then(response => {
        this.setState({
          astronomy: response.data,
        })
      })
      .catch(error => {
        console.log(error, "failed to fetch data")
      })
  }

  render() {
    const { astronomy } = this.state
    return <NewsCard data={astronomy} />
  }
}

export default NewsContainer
