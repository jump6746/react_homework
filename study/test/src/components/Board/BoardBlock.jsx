import classes from './BoardBlock.module.css';

function BoardBlock({ columnIndex, rowIndex }) {
  return (
    <div
      className={classes.block}
      data-column={columnIndex}
      data-row={rowIndex}
    ></div>
  );
}

export default BoardBlock;
