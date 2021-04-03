import Head from 'next/head'
import { useState } from 'react';

import NavLink from './NavLink';
import styles from '../styles/Navbar.module.css';

export default function Navbar(props)
{
    const [isDark, setIsDark] = useState(false);
    return(
        <>
        <nav className={styles.nav}>
            <Head>
                {/* Font Awesome */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
                {/* Fonts */}
                <link href="http://fonts.cdnfonts.com/css/the-naturel-txt" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lobster+Two&display=swap" rel="stylesheet"/>
                {/* Styles */}
                <link rel="stylesheet" href={isDark ? "/themes/vardark.css" : "/themes/varlight.css"}/>
                {/* Meta tags */}
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <meta name="theme-color" content={isDark ? "#222" : "#eee"}/>
                <meta name="title" content="Rosliny miododajne"/>
                <meta property="description" content="Baza roslin miododajnych"/>
                <meta property="twitter:title" content="Rosliny miododajne"/>
                <meta property="title:description" content="Baza roslin miododajnych"/>
                <meta property="og:description" content="Baza roslin miododajnych"/>
                <meta property="og:title" content="Rosliny"/>
                <meta property="og:image" content="/favicon.ico"/>
                <meta property="twitter:image" content="/favicon.ico"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="shortcut icon" content="/favicon.ico"/>
                <meta property="apple icon" content="/favicon.ico"/>
            </Head>
            <ul>
                <NavLink href="."><h1>Rosliny miododajne</h1></NavLink>
                <NavLink href="o-stronie"><h3>O stronie</h3></NavLink>
                <NavLink href="baza"><h3>Baza</h3></NavLink>
                <NavLink href="sql"><h3>Edytor SQL</h3></NavLink>
                <li>
                    <div className={styles.themebtn} onClick={() => setIsDark(!isDark)}>
                        <i className={isDark ? "fas fa-sun": "fas fa-moon"}></i>
                    </div>
                </li>
            </ul>
        </nav> 
        <div className={styles.spacer}></div>
        </>
    );
}