import * as React from "react"
import * as styles from "../styles/Foot.module.css"
import SocialmediaIcons from "./SocialmediaIcons"

export default function Foot() {
    return (
        <>
            <footer className={styles.foot}>
                <div className={styles.tekst}>
                    <p>Copyright © 2021 Rosliny miododajne</p>
                    <SocialmediaIcons />
                </div>
            </footer>
            <div className={styles.spacer}></div>
        </>
    )
}