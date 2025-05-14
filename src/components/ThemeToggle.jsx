import { useTheme } from "./ThemeContext";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
    <button className={styles.button} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>

    <div className={styles.card}>Themed content box</div>
    </div>
  );
}
