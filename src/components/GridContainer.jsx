import GridCell from './GridCell';
import GridItem from './GridItem';
const GridContainer = ({ 
    columns, 
    rows, 
    gap, 
    cellWidth,
    cellHeight, 
    items, 
    setItems,
    handleCellClick, 
    handleDragStop, 
    handleResize,
    parentRef
    }) => {
        const removeItem = (idToRemove) => {
            const updatedItems = items.filter(item => item.id !== idToRemove);
            setItems(updatedItems);
        };
        return (
            <div className="flex-1 bg-white p-6 rounded-xl border border-[#e0e0e0] shadow-sm overflow-hidden items-center"
            ref={parentRef}>
            <div 
                className="relative rounded-lg overflow-hidden mx-auto"
                style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, ${cellWidth}px)`,
                gridTemplateRows: `repeat(${rows}, ${cellHeight}px)`,
                gap: `${gap}px`,
                height: 'fit-content',
                width: 'fit-content'
                }}
            >
                {/* Grid Cells */}
                {Array.from({ length: columns * rows }).map((_, index) => {
                const col = (index % columns) + 1;
                const row = Math.floor(index / columns) + 1;
                const isOccupied = items.some(item => 
                    col >= item.col && 
                    col < item.col + item.colSpan &&
                    row >= item.row && 
                    row < item.row + item.rowSpan
                );

                return (
                    <GridCell
                    key={`${col}-${row}`}
                    col={col}
                    row={row}
                    width={cellWidth}
                    height={cellHeight}
                    isOccupied={isOccupied}
                    onClick={() => !isOccupied && handleCellClick(col, row)}
                    />
                );
                })}

                {/* Resizable Items */}
                {items.map(item => (
                <GridItem
                    key={item.id}
                    item={item}
                    cellWidth={cellWidth}
                    cellHeight={cellHeight}
                    gridGap={gap}
                    onDragStop={handleDragStop}
                    onResize={handleResize}
                    onRemove={() => removeItem(item.id)}
                />
                ))}
            </div>
            </div>
        );
};

export default GridContainer;