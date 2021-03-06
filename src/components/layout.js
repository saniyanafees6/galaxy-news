/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./menu"

import Header from "./header"
import "./layout.css"
import { relative } from "path";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <nav>
          <Menu />
          </nav>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 2000,
          padding: `0px`,
          paddingTop: 0,
         background: 'white',
          // top: '0',
          // width: '100%',
          // zIndex:-2,
        }}
      >
                <div
          style={{
            margin: `0 auto`,
            maxWidth: 2000,
            padding: `2rem`,
            paddingTop: 0,
            position:relative,
          }}
        >
          
          <main>
          
            {children}
          </main>
        </div>
        {/* <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
