
const GridCell = ({ col, row, width, height, isOccupied, onClick }) => {
  return (
    <div
      className={`rounded-lg border-2 transition-colors ${
        isOccupied ? 'border-transparent' : 'border-[#dee2e6] hover:bg-[#e9ecef]'
      } cursor-pointer`}
      style={{ width, height }}
      onClick={onClick}
    >
    </div>
  );
};

export default GridCell;