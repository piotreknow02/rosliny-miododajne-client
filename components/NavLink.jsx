import { useState } from 'react';
import styles from '../styles/NavLink.module.css';

export default function NavLink(props)
{
    const [isHovered, setIsHoverred] = useState(false)
    return(
        <li className={styles.li}>
            <a href={props.href} onMouseEnter={() => setIsHoverred(true)} onMouseLeave={() => setIsHoverred(false)}>
                {props.children}
            </a>
            <div className={styles.link + " " + (isHovered ? styles.linkh : styles.linkn)}></div>
        </li>
    );
}