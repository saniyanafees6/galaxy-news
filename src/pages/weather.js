import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WeatherContainer from "../components/WeatherContainer"

const WeatherPage = () => (
  <Layout>
    <SEO title="Weather" />
    <h1 className="title">Weather</h1>
    <p className="description">
        The following article was taken from NASA's Space Weather Database Of Notifications, Knowledge, Information (DONKI) API. NASA's DONKI API provides weather observations, forecasts and notifications on a daily basis. 
    </p>
    <WeatherContainer />
  </Layout>
)

export default WeatherPage
