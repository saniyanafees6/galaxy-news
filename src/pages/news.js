import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsContainer from "../components/NewsContainer"

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <h1 className="title">News</h1>
    <NewsContainer />
  </Layout>
)

export default NewsPage
