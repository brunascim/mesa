
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Projeto TCC</h1>
      <Link  href={"/compra"}>Compra</Link>
    </div>
  );
}
