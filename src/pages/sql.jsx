import * as React from "react"
import SqlForm from '../components/SqlForm'
import Layout from "../components/layout"
import CommingSoonBanner from "../components/CommingSoonBanner"
import * as styles from '../styles/Sql.module.css'

export default function Sql(props)
{
    return(
        <Layout>
            <CommingSoonBanner/>
            <SqlForm/>
        </Layout>
    )
}