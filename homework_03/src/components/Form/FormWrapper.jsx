import Wrapper from "../Wrapper/Wrapper";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

export default function FormWrapper({
  id,
  label,
  inputType,
  name,
  placeholder,
  inputProps,
  buttonProps,
  buttonCheck = false,
  buttonType,
  buttonText,
}){

  const buttonTag = (<FormButton 
                        buttonType={buttonType} 
                        buttonText={buttonText}
                        {...buttonProps} 
                      />);

  const button = buttonCheck ? buttonTag : null;

  return(
    <Wrapper>
      <FormInput
        id={id} 
        label={label}
        inputType={inputType}
        name={name}
        placeholder={placeholder}
        {...inputProps}
      />
      {button}
    </Wrapper>
  )
}