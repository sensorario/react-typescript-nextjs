import styles from "./page.module.css";

export default function PageNotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Oops! Page not found!!</h1>
      </div>
    </main>
  );
}
