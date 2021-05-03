import * as React from "react"
import DbTable from "../components/DbTable"
import Layout from "../components/layout"
import * as styles from '../styles/Baza.module.css'

export default function Home({children})
{
    return(
        <Layout>
            <DbTable/>
        </Layout>
    )
}