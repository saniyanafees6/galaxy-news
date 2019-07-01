import React from "react"
import { Link } from "gatsby"

import HPLayout from "../components/HPLayout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <HPLayout className="home">
    <SEO title="Home" />
    {/* <Image style="opacity:0.3,"/> */}
    <header >
      <h1 className="main-heading">The Galaxy Times</h1>
      <h3 className="secondary">Coded and Designed by Saniya Nafees</h3>
    </header>
  </HPLayout>
)

export default IndexPage
