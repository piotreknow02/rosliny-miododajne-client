import * as React from "react"
import * as styles from "../styles/DbTable.module.css"
import parse from 'html-react-parser'

export default function DbTable() {
    const SERVER_ADDR = "localhost"
    const [plants, setPlants] = React.useState([]);
    React.useEffect(() => {
        const request = new XMLHttpRequest();
        request.open("GET", `http://${SERVER_ADDR}/all-plants`);
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                setPlants(JSON.parse(this.responseText));
            }
             else if (this.status !== 200) {
                window.location = "./not-working"
            }
        }
        request.send()
    });
    return (
        <>
            <h2>Baza roślin</h2>
            <table className={styles.tab}>
                <tbody>
                    <tr><td>Nazwa</td><td>Nazwa łacińska</td><td>Kraj</td><td>Wydajność miodowa</td><td>Wydajność pyłkowa</td><td>Kategoria</td><td>Zdjęcie</td></tr>
                    {plants.map((p, i) => <tr key={i}><td>{p.Nazwa}</td><td>{p.Nazwa_lacinska}</td><td>{p.Kraj}</td><td>{p.Wydajnosc_miodowa}</td><td>{p.Wydajnosc_pylkowa}</td><td>{p.Kategoria}</td><td>{parse(p.Zdjecie)}</td></tr>)}
                </tbody>
            </table>
        </>
    )
}