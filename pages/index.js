import Head from "next/head";
import { useEffect } from "react/cjs/react.development";
import styles from "../styles/Home.module.css";
import LandingUI from "../components/layoutComponents/LandingUI";
import Navbar from "../components/layoutComponents/Navbar";
import Footer from "../components/layoutComponents/Footer";

export default function Home() {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingUI />
      <Footer />
    </div>
  );
}
