//this component is not a reuseable component

import { useCallback, useReducer } from "react";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/Util/validators";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Form.module.css";

const FormReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].idValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
          isValid: formIsValid,
        },
      };
    default:
      return state;
  }
};

const Form = () => {
  const [formState, dispatch] = useReducer(FormReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const titleInputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(formState.inputs);
  };

  return (
    <form className={styles["form"]}>
      <h2 className={styles["form-heading"]}>Reuseable Input Component</h2>
      <div className={styles["input-container"]}>
        <Input
          type="text"
          id="1"
          label="title"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errorMsg="Please enter valid text"
          onInput={titleInputHandler}
        />
        <Input
          id="2"
          label="Desc"
          element="textarea"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMsg="Please enter 5 char"
        />
      </div>
      <Button type="submit">Add Data</Button>
    </form>
  );
};

export default Form;
