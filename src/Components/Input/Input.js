import { useReducer } from "react";
import { validate } from "../../Shared/Util/validators";
import styles from "./Input.module.css";

const InputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(InputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: props.validators,
    });
  };

  const blurHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={inputState.value}
      />
    );

  const classes = `${styles["input-control"]} ${props.className || ""} ${
    inputState.isTouched && !inputState.isValid
      ? styles["input-control__invalid"]
      : ""
  }`;

  return (
    <div className={classes}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <span>{props.errorMsg}</span>
      )}
    </div>
  );
};

export default Input;
