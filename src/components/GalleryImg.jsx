import React from "react"
import * as styles from "../styles/GalleryImg.module.css"

export default function GalleryImg({src})
{
    return(
        <div className={styles.container}>
            <img className={styles.img} src={src} alt={src.replace(".jpg", "")}/>
        </div>
    )
}