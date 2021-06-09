import React from "react"
import * as styles from "../styles/Galeria.module.css"
import {images, videos} from "../gallery.json"
import GalleryVideo from "../components/GalleryVideo"
import GalleryImg from "../components/GalleryImg"
import Layout from "../components/layout"

export default function Gallery()
{
    return(
        <Layout>
            <div className={styles.gallery}>
                {videos.map(e => <GalleryVideo src={e}/>)}
                {images.map(e => <GalleryImg src={e}/>)}
            </div>
        </Layout>
    )
}