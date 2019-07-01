/**
 * HPLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./menu"

import Header from "./header"
import "./Layout.css"
import { relative } from "path";

const HPLayout = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 2000,
          padding: `0px`,
          paddingTop: 0,
          background: 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)) 50% no-repeat,#000 url(https://images2.alphacoders.com/594/594261.jpg) 50% no-repeat',
          backgroundSize: 'cover,cover',
          height: '100vh',
          position: 'absolute',
          top: '0',
          width: '100%',
          zIndex:-2,
        }}
      >
                <div
          style={{
            margin: `0 auto`,
            maxWidth: 2000,
            padding: `0px`,
            paddingTop: 0,
            position:relative,
          }}
        >
          
          <main>
          <nav>
          <Menu />
          </nav>
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

HPLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HPLayout
