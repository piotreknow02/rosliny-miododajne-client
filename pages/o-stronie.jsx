import DeveloperIcons from '../components/DeveloperIcons'
import SocialmediaIcons from '../components/SocialmediaIcons'
import styles from '../styles/O-stronie.module.css'

export default function About() {
    return (
        <div className={styles.main}>
            <h1>Strona oraz baza danych zrobiona przez Piotra Nowakowskiego i Pawła Floryana.
            <p className={styles.akapit}>Postanowiliśmy utworzyć tę stronę w celu uzyskania wyższej oceny całorocznej w pierwszej klasie technikum na przedmiocie pracownia baz danych.</p>
            Była to również świetna okazja do nauki nowych czynności związanych z zarządzaniem bazami danych oraz z programowaniem. <p>Na stronie znajdują się sekcje "Baza" oraz "Edytor SQL".</p> W pierwszej zgodnie z nazwą znajduje się baza danych, a w drugiej funkcjonalny dla użytkownika edytor kodu sql. <p>Miłego korzystania!👋</p></h1>

            <DeveloperIcons/>
            <SocialmediaIcons/>
        </div>
    )
}