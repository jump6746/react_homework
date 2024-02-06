import classes from './Stack.module.css';

function Stack({
  as: Component = 'div',
  className: customClassNames = '',
  style: customStyles,
  vertical = false,
  gap,
  my: marginBlock,
  mx: marginInline,
  ...restProps
}) {
  const componentClassName = `${classes.stack} ${customClassNames}`.trim();
  const defaultStyle = {};

  if (vertical) {
    defaultStyle[__direction] = 'column';
  }
  if (gap || gap === 0) {
    defaultStyle[__gap] = `${gap}px`;
  }
  if (marginBlock || marginBlock === 0) {
    defaultStyle[__marginBlock] = `${marginBlock}px`;
  }
  if (marginInline || marginInline === 0) {
    defaultStyle[__marginInline] = `${marginInline}px`;
  }

  const styleOption = {
    ...defaultStyle,
    ...customStyles,
  };

  return (
    <Component
      className={componentClassName}
      style={styleOption}
      {...restProps}
    />
  );
}

export default Stack;
