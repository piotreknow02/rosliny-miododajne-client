/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/Navbar";
import "../styles/style.css"
import Foot from "./Foot";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Foot/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
