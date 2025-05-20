import Content from "@/icons/Content";
import styles from "../app/page.module.css";
import Navbar from "@/icons/Navbar";
import Logo from "@/icons/Logo";
import Sidebar from "@/icons/Sidebar";

export default function Home() {
  return (
    <>
    <div className={styles.flex}>
      <div className={styles.Header}>
          <Logo />
          <Navbar />
      </div>
      <div className={styles.cards}>
          <Content />
          <Content />
          <Content />
          <Content />
          <Sidebar />
      </div>
    </div>
    </>
  )
}