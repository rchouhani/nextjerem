import Link from "next/link";
import styles from "../app/page.module.css";
import Heart from "./Heart";

export default function Content(){
  return (
    <div className={styles.Content}>
      <Link href="https://placehold.co/600x400"><Heart /></Link>
    </div>
  )
}