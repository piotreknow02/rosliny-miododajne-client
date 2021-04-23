import * as React from "react"

import * as styles from "../styles/DeveloperIcons.module.css";

export default function DeveloperIcons() {
    const devicons = [
        {
        username: "piotreknow02",
        photo: "https://avatars.githubusercontent.com/u/65082017",
    },
    {
        username: "OreoPL-Studio",
        photo: "https://avatars.githubusercontent.com/u/81591050",
    }
    ]
    return (
        <fieldset className={styles.main}>
            <legend>Autorzy strony</legend>
            {devicons.map((i, key) =>
                <a key={key} href={"https://github.com/" + i.username}>
                    <div className={styles.devicon} title={i.username}>
                        <img src={i.photo} alt={i.username}/>
                    </div>
                </a>
            )}

        </fieldset>
    )
}