import React from 'react';

class Grid extends React.Component {
  render() {
    const { rows, cols, cellSize, gridData, onCellClick } = this.props;

    const gridStyle = {
      display: 'grid',
      gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
      gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
      border: '1px solid #ccc',
    };

    const cellStyle = {
      width: `${cellSize}px`,
      height: `${cellSize}px`,
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      cursor: 'pointer',
    };

    return (
      <div className="grid" style={gridStyle}>
        {gridData.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{ ...cellStyle, backgroundColor: color }}
              onClick={() => onCellClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
    );
  }
}

export default Grid;
