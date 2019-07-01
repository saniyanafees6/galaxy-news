import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageContainer from "../components/ImageContainer"
import MarsImage from "../components/MarsImage"

const ImagePage = () => (
  <Layout>
    <SEO title="Images" />
    <h1 className="title">Earth Images</h1>
    <p className="description">The Images below were obtained from NASA's EPIC API, which provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. This API provides useful information such as the Sun's Position, Lunar Position, coordinates and a lot more. More information about this API can be found at <a href="https://api.nasa.gov/api.html#EPIC" role="link">NASA's Website</a></p>
    <ImageContainer />
    <h2 className="title">Mars Rover Images</h2>
    <p className="description">The Images below were obtained from NASA's Mars Rover Photos API, is designed to collect image data gathered by NASA's Curiosity rover on Mars. The following images are the latest images uploaded to the API. For more information, visit: <a href="https://api.nasa.gov/api.html#MarsPhotos" role="link">NASA's Website</a></p>
    <MarsImage />


  </Layout>
)

export default ImagePage
