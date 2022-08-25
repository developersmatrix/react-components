//this component is not a reuseable component

import { useForm } from "../../Shared/Hooks/useForm";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/Util/validators";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Form.module.css";

const Form = () => {
  const initialInputs = {
    title: {
      value: "",
      isValid: false,
    },
    desc: {
      value: "",
      isValid: false,
    },
  };
  const [formState, inputHandler] = useForm(initialInputs, false);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <h2 className={styles["form-heading"]}>Reuseable Input Component</h2>
      <div className={styles["input-container"]}>
        <Input
          className={styles["input-out"]}
          type="number"
          id="title"
          label="title"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errorMsg="Please enter valid text"
          onInput={inputHandler}
        />
        <Input
          // className={styles["input-out"]}
          id="desc"
          label="Desc"
          element="textarea"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMsg="Please enter 5 char"
          onInput={inputHandler}
          initialValue={"initial value"}
          initialValidity={true}
        />
      </div>
      <Button type="submit" disabled={!formState.isValid}>
        Add Data
      </Button>
    </form>
  );
};

export default Form;
