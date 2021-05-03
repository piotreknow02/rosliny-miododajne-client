import * as React from "react"
import * as styles from "../styles/CommingSoonBanner.module.css"

export default function CommingSoonBanner()
{
    return(
        <div className={styles.bannerbg}>
            <div className={styles.banner}>
                <h1>Już wkrótce</h1>
            </div>
        </div>
    )
}