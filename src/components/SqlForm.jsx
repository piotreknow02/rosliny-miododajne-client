import * as React from "react"
import * as styles from "../styles/SqlForm.module.css"

export default function SqlForm()
{
    const securityPattern = /(drop)|(delete)|(create)|(use)/gi
    return(
        <fieldset className={styles.main}>
            <legend>SQL</legend>
            <form action="" method="post">
                <textarea name="q" cols="100" rows="10" onChange={(e) => {if (securityPattern.test(e.target.value)) alert("Nawet nie próbuj")}}></textarea>
                <input type="submit" value="Wykonaj"/>
            </form>
        </fieldset>
    )
}