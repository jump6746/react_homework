import classes from './Wrapper.module.css';

export default function Wrapper({
  as: Component = 'div',
  className: customClassNames = '',
  style: customStyle,
  vertical = false,
  gap,
  my: marginBlock,
  mx: marginInline,
  ...restProps
}) {
  const componentClassName = `${classes.Wrapper} ${customClassNames}`.trim();
  const defaultStyle = {};

  if (vertical) {
    defaultStyle['--direction'] = 'column';
  }

  if (gap || gap === 0) {
    defaultStyle['--gap'] = `${gap}px`;
  }

  if (marginBlock || marginBlock === 0) {
    defaultStyle['--marginBlock'] = `${marginBlock}px`;
  }

  if (marginInline || marginInline === 0) {
    defaultStyle['--marginInline'] = `${marginInline}px`;
  }

  const componentStyle = {
    ...defaultStyle,
    ...customStyle,
  };

  return (
    <Component
      className={componentClassName}
      style={componentStyle}
      {...restProps}
    />
  );
}
