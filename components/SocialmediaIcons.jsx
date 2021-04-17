import styles from "../styles/SocialmediaIcons.module.css";

export default function SocialmediaIcons()
{
    return(
        <div className={styles.main}>
            <a href="https://www.facebook.com/Rośliny-miododajne-111259011066259">
                <i className={styles.icon + " fab fa-facebook-square"}></i>
            </a>
            <a href="mailto: roslinymiododajne@poczta.fm">
                <i className={styles.icon + " fas fa-envelope"}></i>
            </a>
        </div>
    )
}