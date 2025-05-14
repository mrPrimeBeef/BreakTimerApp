// CSS
import styles from "./App.module.css";

// Componets
import ThemeToggle from "./components/ThemeToggle";

// Pages
import Timer from "./pages/Timer";

function App() {


  return (
    <div className={styles.app}>
      <Timer />
      <ThemeToggle />
    </div>
  );
}

export default App;
