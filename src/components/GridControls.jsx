import { Button } from "@material-tailwind/react";
const GridControls = ({ columns, rows, gap, width, height, setColumns, setRows, setGap,setHeight,setWidth }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6 border border-[#e0e0e0]">
      <div className="flex gap-8 items-center justify-center">
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6c757d]">Columns</label>
          <input
            value={columns}
            onChange={(e) => setColumns(Math.max(1, e.target.valueAsNumber))}
            className="w-16 px-3 py-2 border border-[#dee2e6] rounded-lg text-center text-[#495057]"
            type="number"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6c757d]">Rows</label>
          <input
            value={rows}
            onChange={(e) => setRows(Math.max(1, e.target.valueAsNumber))}
            className="w-16 px-3 py-2 border border-[#dee2e6] rounded-lg text-center text-[#495057]"
            type="number"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6c757d]">Gap(px)</label>
          <input
            value={gap}
            onChange={(e) => setGap(Math.max(0, e.target.valueAsNumber))}
            className="w-16 px-3 py-2 border border-[#dee2e6] rounded-lg text-center text-[#495057]"
            type="number"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6c757d]">Cell Width(px)</label>
          <input
            value={width}
            onChange={(e) => setWidth(Math.max(0, e.target.valueAsNumber))}
            className="w-18 px-3 py-2 border border-[#dee2e6] rounded-lg text-center text-[#495057]"
            type="number"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#6c757d]">Cell Height(px)</label>
          <input
            value={height}
            onChange={(e) => setHeight(Math.max(0, e.target.valueAsNumber))}
            className="w-18 px-3 py-2 border border-[#dee2e6] rounded-lg text-center text-[#495057]"
            type="number"
          />
        </div>
        <Button ripple={true} color="red" size="sm">Reset</Button>
      </div>
    </div>
  );
};

export default GridControls;