// for client side action we use client
// for the child component it automatic apply
'use client'
// LayoutRouter.tsx is a entry file for next js
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Home Page</h1>

     <Link href="/about">go to about</Link>
     <Link href='/login'>got to Login Page</Link>
     <button onClick={()=>alert("hii")}>button</button>
    </main>
  );
}
