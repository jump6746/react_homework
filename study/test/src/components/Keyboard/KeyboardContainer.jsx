import KeyboardButton from './KeyboardButton';
import classes from './KeyboardContainer.module.css';

function KeyboardContainer({ event, ...restProps }) {
  const keyboardName = ['up', 'left', 'down', 'right'];
  const keyboard = keyboardName.map((name, index) => {
    return <KeyboardButton name={name} key={index} event={event} />;
  });

  return (
    <div className={classes.keyboard} {...restProps}>
      {keyboard}
    </div>
  );
}

export default KeyboardContainer;
