function KeyboardButton({ name, event, ...restProps }) {
  let content = '';
  // ↑ || → || ← || ↓

  switch (name) {
    case 'up':
      content = '↑';
      break;
    case 'down':
      content = '↓';
      break;
    case 'left':
      content = '←';
      break;
    case 'right':
      content = '→';
      break;
  }

  return (
    <button type="button" onClick={event} {...restProps}>
      {content}
    </button>
  );
}

export default KeyboardButton;
