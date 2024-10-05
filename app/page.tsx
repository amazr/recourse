import styles from "./page.module.css";
import { OptionsContract } from "./components/OptionsContract";


export default function Home() {
  return (
    <div className={styles.page}>
      <OptionsContract />
    </div>
  );
}
