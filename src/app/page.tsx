import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <div>
            <label>
              Hero
              <input></input>
            </label>
          </div>
          <div>
            <label>
              Villain
              <input></input>
            </label>
          </div>
        </div>
      </header>
    </div>
  );
}
