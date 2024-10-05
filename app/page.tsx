import Image from "next/image";
import styles from "./page.module.css";
import { OptionsContract } from "./components/OptionsContract";
import { optionsContract } from "./actions/polygon";

export default function Home() {
  return (
    <div className={styles.page}>
      <OptionsContract />
    </div>
  );
}
