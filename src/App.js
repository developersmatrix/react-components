import styles from "./App.module.css";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Card>
        <Form />
      </Card>
    </div>
  );
}

export default App;
