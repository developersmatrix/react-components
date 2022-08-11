import styles from "./App.module.css";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className={styles.App}>
      <Card>
        <Form />
      </Card>
    </div>
  );
}

export default App;
