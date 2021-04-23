import * as React from "react"
import Layout from "../components/layout"
import * as styles from '../styles/Baza.module.css'

export default function Home({children})
{
    return(
        <Layout>
            <h1>Rośliny.pl</h1>
            <h2>{children}</h2>
        </Layout>
    )
}