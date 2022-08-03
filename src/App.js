import styles from "./App.module.css";
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className={styles.App}>
      <Card>hello</Card>
      <Button type="submit">add</Button>
    </div>
  );
}

export default App;
