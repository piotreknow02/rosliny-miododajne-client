import React from "react"
import * as styles from "../styles/GalleryVideo.module.css"

export default function GalleryVideo({src})
{
    return(
        <div className={styles.container}>
            <video className={styles.video} src={src} autoPlay muted></video>
        </div>
    )
}