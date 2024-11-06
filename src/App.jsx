import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Outlet />      
    </div>
  );
}

export default App;
