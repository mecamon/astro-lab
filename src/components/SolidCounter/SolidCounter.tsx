import { onCleanup, createSignal } from "solid-js";
import styles from "./SolidCounter.module.css";

const SolidCounter = () => {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount((count) => count + 1), 1000);
  onCleanup(() => clearInterval(interval));

  return <div class={styles.container}>Count value is {count()}</div>;
};

export default SolidCounter;
