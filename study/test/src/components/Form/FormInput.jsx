import React from "react"
import classes from "./FormInput.module.css";

function FormInput({
  inputClass,
  labelClass,
  id = React.useId(),
  text,
  name,
  placeholder,
  onAction,
  ...inputProps
}){

  const labelClassName = `${classes.FormLabel} ${labelClass}`;
  const inputClassName = `${classes.FormInput} ${inputClass}`;

  return(
    <>
      <label className={labelClassName} htmlFor={id}>
        {text}
      </label>
      <input
        className={inputClassName}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onAction}
        {...inputProps}
      />
    </>
  );
}

export default FormInput;