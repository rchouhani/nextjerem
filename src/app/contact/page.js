import Link from "next/link";
import styles from "../page.module.css";


export default function Contact() {
    return (
        <div className={styles.contact}>  
            <h1>Bienvenue dans la page contact</h1>
            <Link href="mailto:rchouhani@me.com">Essaie de me contacter si tu l'oses</Link>
        </div>
    );
}