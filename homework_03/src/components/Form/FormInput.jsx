import React from 'react';

export default function FormInput({
  id = React.useId(),
  label = '',
  inputType = 'text',
  name,
  placeholder,
  ...inputProps
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={inputType}
        id={id}
        name={name}
        placeholder={placeholder}
        {...inputProps}
      />
    </>
  );
}
