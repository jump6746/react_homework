import BoardBlock from './BoardBlock';
import classes from './Board.module.css';

function Board({ boardSize = 3 }) {
  const boardIndex = [];

  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    for (let columnIndex = 0; columnIndex < boardSize; columnIndex++) {
      boardIndex.push({ rowIndex, columnIndex });
    }
  }

  console.log(boardIndex);

  const board = boardIndex.map(({ rowIndex, columnIndex }, index) => {
    return (
      <BoardBlock key={index} rowIndex={rowIndex} columnIndex={columnIndex} />
    );
  });

  return <div className={classes.board}>{board}</div>;
}

export default Board;
