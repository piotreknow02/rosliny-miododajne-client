import * as React from "react"
import Layout from "../components/layout"
import DeveloperIcons from '../components/DeveloperIcons'
import SocialmediaIcons from '../components/SocialmediaIcons'
import * as styles from '../styles/O-stronie.module.css'

export default function About() {
    return (
        <Layout>
            <div className={styles.main}>
                <h1>Strona oraz baza danych zrobiona przez Piotra Nowakowskiego, Pawła Floryana i Bartosza Mółkę.
                <p className={styles.akapit}>Postanowiliśmy utworzyć tę stronę w celu uzyskania wyżeszej oceny całorocznej w drugiej klasie techinkum na przedmiocie systemy baz danych.</p>
                <p>Była to również świetna okazja do nauki nowych czynności związanych z zarządzaniem bazami danych oraz z programowaniem.</p><p>Miłego korzystania!👋</p></h1>
                <DeveloperIcons/>
            </div>
        </Layout>
    )
}