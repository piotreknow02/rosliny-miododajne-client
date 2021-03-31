import Head from 'next/head'
import { useState } from 'react';

import NavLink from './NavLink';
import styles from'../styles/Navbar.module.css';

export default function Navbar(props)
{
    const [isDark, setIsDark] = useState(false);
    return(
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
    );
}