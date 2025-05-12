import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return(
        <div className={styles.languages}>
            <Link href="https://adatechschool.fr/" className={styles.ada}>
                <img src="/ada.png" alt="Ada Trademark" title="Ada Tech School" width={70} height={70}/>
            </Link>
            <Link href="https://devdocs.io/c/" className={styles.logo}>
                <img src="/c.png" alt="Language C Documentation of Devdocs.io" title="Language C" width={70} height={70}/>
            </Link>
            <Link href="https://developer.mozilla.org/fr/docs/Web/CSS" className={styles.logo}>
                <img src="/css.png" alt="MDN Documentation of CSS" title="Language CSS" width={70} height={70}/>
            </Link>
            <Link href="https://developer.mozilla.org/fr/docs/Web/HTML" className={styles.logo}>
                <img src="/html.png" alt="MDN Documentation of HTML" title="Language HTML" width={70} height={70}/>
            </Link>
            <Link href="https://developer.mozilla.org/fr/docs/Web/Javascript" className={styles.logo}>
                <img src="/js.png" alt="MDN Documentation of JavaScript" title="Language JavaScript" width={70} height={70}/>
            </Link>
            <Link href="https://git-scm.com/book/fr/v2" className={styles.logo}>
                <img src="/git.png" alt="Official Documentation of Git" title="Git Logo" width={70} height={70}/>
            </Link>
            <Link href="https://docs.oracle.com/en/java/" className={styles.logo}>
                <img src="/java.png" alt="MDN Documentation of Java" title="Java Logo" width={70} height={70}/>
            </Link>
        </div>
    );
}