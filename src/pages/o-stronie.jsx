import * as React from "react"
import Layout from "../components/layout"
import DeveloperIcons from '../components/DeveloperIcons'
import SocialmediaIcons from '../components/SocialmediaIcons'
import * as styles from '../styles/O-stronie.module.css'

export default function About() {
    return (
        <Layout>
            <div className={styles.main}>
                <h1>Strona oraz baza danych zrobiona przez Piotra Nowakowskiego i Pawła Floryana.
                <p className={styles.akapit}>Postanowiliśmy utworzyć tę stronę w celu uzyskania wyżeszej oceny całorocznej w pierwszej klasie techinkum na przedmiocie pracownia baz danych.</p>
                Była to również świetna okazja do nauki nowych czynności związanych z zarządzaniem bazami danych oraz z programowaniem. <p>Na stronie znajdują się sekcje "Baza" oraz "Edytor SQL".</p> W pierwszej zgodnie z nazwą znajduje się baza danych, a w drugiej funkcjonalny dla użytkownika edytor kodu sql. <p>Miłego kożystania!👋</p></h1>
                <DeveloperIcons/>
            </div>
        </Layout>
    )
}