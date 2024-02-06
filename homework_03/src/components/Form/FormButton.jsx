export default function FormButton({ buttonType = 'button', buttonText }) {
  return (
    <>
      <button type={buttonType}>{buttonText}</button>
    </>
  );
}
