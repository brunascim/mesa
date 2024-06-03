
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container" >
      <h1>Links</h1>
      <Link  href={"/"}><p className={styles.linkTemp}>Home</p></Link>
      <Link href={"/compra"}><p className={styles.linkTemp}>Compra</p></Link>
      <Link href={"/duvidas"}><p className={styles.linkTemp}>Duvidas</p></Link>
      <Link href={"/homelogin"}><p className={styles.linkTemp}>Home Login</p></Link>
      <Link href={"/compra"}><p className={styles.linkTemp}>Compra</p></Link>
      <Link href={"/usuarios/cadusuario"}><p className={styles.linkTemp}>Cadastro de usuario</p></Link>
      <Link href={"/usuarios/login"}><p className={styles.linkTemp}>Login</p></Link>

    </div>
  );
}
