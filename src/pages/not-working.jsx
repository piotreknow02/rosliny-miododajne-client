import * as React from "react"
import * as styles from "../styles/NotWorking.module.css"
import Layout from "../components/layout"

export default function NotWorking() {
    return (
        <Layout>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <h1>Przepraszamy</h1>
                    <h2>Strona nie działa <span role="img"> 😢 </span> </h2>
                    <h5>Autorzy strony mają za mało <span role="img"> 💵 </span> żeby utrzymać hosting</h5>
                    <h5>Jeśli chcesz aby nasza strona działała cały czas, <a href="mailto:rosliny.miododajne@poczta.fm">pomyśl o przekazaniu dotacji</a> <span role="img">🤑</span></h5>
                </div>
            </div>
        </Layout>
    )
}