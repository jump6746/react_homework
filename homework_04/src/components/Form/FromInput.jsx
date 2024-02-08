import { useId } from 'react';

export default function FormInput({
  labelClass,
  inputClass,
  label,
  name,
  type,
  placeholder,
  onChange,
  inputProps,
}) {
  const id = useId();

  // label Class
  const defaultLabelClass = '';
  const labelClassName = `${defaultLabelClass} ${labelClass}`.trim();

  // input Class
  const defaultInputClass = 'w-full h-10 p-4';
  const inputClassName = `${defaultInputClass} ${inputClass}`.trim();

  return (
    <div>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <input
        className={inputClassName}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...inputProps}
      />
    </div>
  );
}
