import * as React from "react"
import * as styles from "../styles/Feature.module.css"

export default function Feature(props)
{
    return(
        <div className={styles.container}>
            <div className={styles.featurebox}>
                <i className={props.icn}></i>
                <h3>{props.desc}</h3>
            </div>
        </div>
    )
}