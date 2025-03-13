import { useState, useRef, useEffect } from 'react';
import GridControls from './GridControls';
import GridContainer from './GridContainer';
import { checkCollision } from './utils';
import CodeGenerator from './CodeGenerator';
const GridGenerator = () => {
    const [columns, setColumns] = useState(5);
    const [rows, setRows] = useState(5);
    const [gap, setGap] = useState(6);
    const [width, setWidth] = useState(64);
    const [height, setHeight] = useState(64);
    const [items, setItems] = useState([]);
    const cellWidth = width;
    const cellHeight = height;
    const gridGap = gap;
    const parentRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(0);
    const [parentHeight, setParentHeight] = useState(0);

    useEffect(() => {
            if (parentRef.current) {
            setParentWidth(parentRef.current.offsetWidth);
            setParentHeight(parentRef.current.offsetHeight);
            }
    });
    useEffect(() => {
        const updateDimensions = () => {
            if (parentRef.current) {
                setParentWidth(parentRef.current.offsetWidth);
                setParentHeight(parentRef.current.offsetHeight);
            }
        };
    
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    
    const handleCellClick = (col, row) => {
        const existingItem = items.find(item => 
            item.col === col && 
            item.row === row &&
            item.colSpan === 1 &&
            item.rowSpan === 1
        );

        if (existingItem) {
            setItems(items.filter(item => item.id !== existingItem.id));
        } else {
            const newItem = {
                id: Date.now(),
                col,
                row,
                colSpan: 1,
                rowSpan: 1,
                number: items.length + 1
            };
            setItems([...items, newItem]);
        }
    };

    const handleDragStop = (id, position) => {
        const currentItem = items.find(item => item.id === id);
        const newCol = Math.max(1, Math.round(position.x / (cellWidth + gridGap)) + 1);
        const newRow = Math.max(1, Math.round(position.y / (cellHeight + gridGap)) + 1);
        
        const boundedCol = Math.min(newCol, columns - currentItem.colSpan + 1);
        const boundedRow = Math.min(newRow, rows - currentItem.rowSpan + 1);
        
        const wouldCollide = items.some(item => {
            if (item.id === id) return false;
            
            return (
                boundedCol < item.col + item.colSpan &&
                boundedCol + currentItem.colSpan > item.col &&
                boundedRow < item.row + item.rowSpan &&
                boundedRow + currentItem.rowSpan > item.row
            );
        });
        
        if (wouldCollide) {
            return;
        }
        
        setItems(items.map(item => 
            item.id === id ? {
                ...item,
                col: boundedCol,
                row: boundedRow
            } : item
        ));
        console.log(items);
    };

    const handleResize = (id, direction, ref) => {
        const refWidth = ref.offsetWidth;
        const refHeight = ref.offsetHeight;
        const newColSpan = Math.max(1, Math.round(refWidth / (cellWidth + gridGap)));
        const newRowSpan = Math.max(1, Math.round(refHeight / (cellHeight + gridGap)));
        
        const currentItem = items.find(item => item.id === id);
        
        if (
            currentItem.col + newColSpan - 1 > columns ||
            currentItem.row + newRowSpan - 1 > rows ||
            checkCollision(currentItem, newColSpan, newRowSpan, items)
        ) {
            return;
        }

        setItems(items.map(item => 
            item.id === id ? {
                ...item,
                colSpan: newColSpan,
                rowSpan: newRowSpan
            } : item
        ));
        console.log(items);
    };

    return (
        <div className="h-screen bg-[#f8f9fa] p-6 flex flex-col select-none">
            <GridControls 
                columns={columns}
                rows={rows}
                gap={gap}
                width={width}
                height={height}
                setColumns={setColumns}
                setRows={setRows}
                setGap={setGap}
                setWidth={setWidth}
                setHeight={setHeight}
                setItems={setItems}
                parentHeight={parentHeight}
                parentWidth={parentWidth}
            />
            
            <GridContainer 
                columns={columns}
                rows={rows}
                gap={gap}
                cellWidth={cellWidth}
                cellHeight={cellHeight}
                items={items}
                setItems={setItems}
                handleCellClick={handleCellClick}
                handleDragStop={handleDragStop}
                handleResize={handleResize}
                parentRef={parentRef}
            />
            <CodeGenerator 
                items={items}
                width={width}
                height={height}
                />
        </div>
    );
};

export default GridGenerator;