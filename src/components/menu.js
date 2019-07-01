import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div
    style={{
      background: "#222",
      paddingTop: "10px",
      position: "relative",
      top: 0,
      left: 0,
      zIndex: 30,
      width: "100%",
      borderBottom:"3px solid #3E8891",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        color: "#fff",
      }}
    >
      <li>
        <Link className="navlink" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="navlink" to="/images">
          Images
        </Link>
      </li>
      <li>
        <Link className="navlink" to="/weather">
          Weather
        </Link>
      </li>
      <li>
        <Link className="navlink" to="/news">
          News
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
