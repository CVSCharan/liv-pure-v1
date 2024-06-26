import MainPage from "./components/MainPage/MainPage";
import SecondPage from "./components/SecondPage/SecondPage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
      <SecondPage />
    </main>
  );
}
