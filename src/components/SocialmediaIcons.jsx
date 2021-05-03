import * as React from "react"
import * as styles from "../styles/SocialmediaIcons.module.css"

export default function SocialmediaIcons() {
    return (
        <div className={styles.main}>
            <a href="https://github.com/piotreknow02/rosliny-miododajne-serwer">
                <i className={styles.icon + " fas fa-code-branch"}></i>
            </a>
            <a href="https://github.com/piotreknow02/rosliny-miododajne-client">
                <i className={styles.icon + " fas fa-code-branch"}></i>
            </a>
            <a href="https://www.facebook.com/Rośliny-miododajne-111259011066259">
                <i className={styles.icon + " fab fa-facebook-square"}></i>
            </a>
            <a href="mailto: roslinymiododajne@poczta.fm">
                <i className={styles.icon + " fas fa-envelope"}></i>
            </a>
        </div>
    )
}