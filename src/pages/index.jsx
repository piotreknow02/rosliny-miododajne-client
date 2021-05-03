import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/Index.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

import Logo from "../images/logo.svg"
import Feature from "../components/Feature"

export default function IndexPage() {
  console.log(styles)
  return (
    <Layout>
      <Seo title="Rośliny miododajne"/>
      <Helmet>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Rosliny Miododajne</title>
      </Helmet>
      <div className={styles.titlecontainer}>
        <img className={styles.logo} src={Logo} alt="logo"/>
        <div>
          <h1 className={styles.title}>Rośliny miododajne</h1>
          <h5>Twoja baza roślin miododajnych</h5>
        </div>
      </div>
      <div className={styles.featurescontainer}>
        <Feature icn="fas fa-clipboard-check" desc="Łatwa w obsłudze"/>
        <Feature icn="fas fa-tachometer-alt" desc="Szybka"/>
        <Feature icn="fas fa-layer-group" desc="Wygodny design"/>
        <Feature icn="fas fa-images" desc="Zawiera zdjęcia"/>
        <Feature icn="fas fa-adjust" desc="Posiada motyw ciemny"/>
        <Feature icn="fas fa-hand-holding-usd" desc="Darmowa"/>
      </div>
      <div className={styles.buttoncontainer}>
        <a href="/baza">
          <span>
          Przeglądaj bazę!
          </span>
        </a>
      </div>
    </Layout>
  )
}
