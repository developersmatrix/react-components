import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Card>
                <Form />
              </Card>
            }
          ></Route>
          <Route
            path="/misc"
            element={
              <Card>
                <Form />
              </Card>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
