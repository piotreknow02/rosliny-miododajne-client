import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Rośliny miododajne"/>
      <Helmet>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          {/* Styles */}
          <link rel="stylesheet" href="./style.css"/>
          <title>Rosliny Miododajne</title>
      </Helmet>
    </Layout>
  )
}
