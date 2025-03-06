export const snapToGrid = (pixels, cellSize, gridGap) => {
    return Math.round(pixels / (cellSize + gridGap));
  };
  
  export const checkCollision = (currentItem, newColSpan, newRowSpan, items) => {
    return items.some(item => {
      if (item.id === currentItem.id) return false;
      return (
        currentItem.col < item.col + item.colSpan &&
        currentItem.col + newColSpan > item.col &&
        currentItem.row < item.row + item.rowSpan &&
        currentItem.row + newRowSpan > item.row
      );
    });
  };