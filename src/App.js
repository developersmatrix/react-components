import styles from "./App.module.css";
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import Input from "./Components/Input/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "./Shared/Util/validators";

function App() {
  return (
    <div className={styles.App}>
      <Card>
        <form>
          <Input
            type="text"
            id="1"
            label="test"
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            errorMsg="Please enter valid text"
          />
          <Input
            id="2"
            label="Desc"
            element="textarea"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorMsg="Please enter 5 char"
          />
          <Button type="submit">add</Button>
        </form>
      </Card>
    </div>
  );
}

export default App;
