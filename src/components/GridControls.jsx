import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const GridControls = ({ columns, rows, gap, width, height, setColumns, setRows, setGap, setHeight, setWidth, setItems, parentHeight, parentWidth }) => {
  const [maxWidth, setMaxWidth] = useState(300);
  const [maxHeight, setMaxHeight] = useState(300);
  const [maxColumns, setMaxColumns] = useState(10);
  const [maxRows, setMaxRows] = useState(10);
  const [maxGap, setMaxGap] = useState(8);
  const padding = 40; 

  useEffect(() => {
    if (parentWidth > 0 && parentHeight > 0 && columns > 0 && rows > 0) {
      setMaxWidth(Math.floor((parentWidth - padding - gap * (columns - 1)) / columns));
      setMaxColumns(Math.max(1, Math.ceil((parentWidth - padding) / (width + gap))));
      
      setMaxHeight(Math.floor((parentHeight - padding - gap * (rows - 1)) / rows));
      setMaxRows(Math.max(1, Math.ceil((parentHeight - padding) / (height + gap))));
      
      setMaxGap(Math.min(
        Math.ceil((parentHeight - padding) / rows - height), 
        Math.ceil((parentWidth - padding) / columns - width)
      ));
    }
  }, [parentWidth, parentHeight, gap, columns, rows, width, height, padding]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6 border border-[#e0e0e0]">
      <div className="flex gap-8 items-center justify-center">
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6c757d]">Columns</label>
          <input
            value={columns}
            onChange={(e) => setColumns(Math.max(1, Math.min(maxColumns, e.target.valueAsNumber)))}
            className="w-16 px-3 py-2 border border-[#dee2e6] rounded-lg text-center text-[#495057]"
            type="number"
            min={1}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6c757d]">Rows</label>
          <input
            value={rows}
            onChange={(e) => setRows(Math.max(1, Math.min(maxRows, e.target.valueAsNumber)))}
            className="w-16 px-3 py-2 border border-[#dee2e6] rounded-lg text-center text-[#495057]"
            type="number"
            min={1}
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6c757d]">Gap(px)</label>
          <input
            value={gap}
            onChange={(e) => setGap(Math.min(maxGap, e.target.valueAsNumber))}
            className="w-16 px-3 py-2 border border-[#dee2e6] rounded-lg text-center text-[#495057]"
            type="number"
            min={0}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6c757d]">Cell Width(px)</label>
          <input
            value={width}
            onChange={(e) => setWidth(Math.max(64, Math.min(maxWidth, e.target.valueAsNumber)))}
            className="w-20 px-3 py-2 border border-[#dee2e6] rounded-lg text-center text-[#495057]"
            type="number"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6c757d]">Cell Height(px)</label>
          <input
            value={height}
            onChange={(e) => setHeight(Math.max(64, Math.min(maxHeight, e.target.valueAsNumber)))}
            className="w-20 px-3 py-2 border border-[#dee2e6] rounded-lg text-center text-[#495057]"
            type="number"
          />
        </div>
        <Button ripple={true} color="red" size="sm" onClick={() => setItems([])}>Reset</Button>
      </div>
    </div>
  );
};

export default GridControls;
