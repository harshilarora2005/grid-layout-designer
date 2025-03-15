import { Button, Input } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const GridControls = ({
  columns,
  rows,
  gap,
  width,
  height,
  setColumns,
  setRows,
  setGap,
  setHeight,
  setWidth,
  setItems,
  parentHeight,
  parentWidth,
}) => {
  const [maxWidth, setMaxWidth] = useState(300);
  const [maxHeight, setMaxHeight] = useState(300);
  const [maxColumns, setMaxColumns] = useState(10);
  const [maxRows, setMaxRows] = useState(10);
  const [maxGap, setMaxGap] = useState(8);
  const [errors, setErrors] = useState({});
  const [inputValues, setInputValues] = useState({
    width: width,
    height: height,
    columns: columns,
    rows: rows,
    gap: gap
  });
  const padding = 40;

  useEffect(() => {
    if (parentWidth > 0 && parentHeight > 0 && columns > 0 && rows > 0) {
      setMaxWidth(Math.floor((parentWidth - padding - gap * (columns - 1)) / columns));
      setMaxColumns(Math.max(1, Math.floor((parentWidth - padding) / (width + gap))));

      setMaxHeight(Math.floor((parentHeight - padding - gap * (rows - 1)) / rows));
      setMaxRows(Math.max(1, Math.floor((parentHeight - padding) / (height + gap))));

      setMaxGap(
        Math.min(
          Math.floor((parentHeight - padding) / rows - height),
          Math.floor((parentWidth - padding) / columns - width)
        )
      );
    }
  }, [parentWidth, parentHeight, gap, columns, rows, width, height, padding]);
  useEffect(() => {
    setInputValues({
      width: width,
      height: height,
      columns: columns,
      rows: rows,
      gap: gap
    });
  }, [width, height, columns, rows, gap]);
  const handleInputChange = (setter, key, value, min, max) => {
    setInputValues(prev => ({ ...prev, [key]: value }));
    if (value === "" || isNaN(value)) {
      setErrors(prev => ({ ...prev, [key]: "Please enter a number" }));
      return;
    }
    const numericValue = Number(value);
    if (numericValue < min) {
      setErrors(prev => ({ ...prev, [key]: `Must be at least ${min}` }));
    } else if (numericValue > max) {
      setErrors(prev => ({ ...prev, [key]: `Must be at most ${max}` }));
    } else {
      setErrors(prev => ({ ...prev, [key]: "" }));
      setter(numericValue);
    }
  };
  const handleBlur = (setter, key, value, min, max) => {
    if (value === "" || isNaN(value)) {
      setter(min);
      setInputValues(prev => ({ ...prev, [key]: min }));
      setErrors(prev => ({ ...prev, [key]: "" }));
    } else {
      const numericValue = Math.max(min, Math.min(max, Number(value)));
      setter(numericValue);
      setInputValues(prev => ({ ...prev, [key]: numericValue }));
      setErrors(prev => ({ ...prev, [key]: "" }));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-center">
        {["columns", "rows", "gap", "width", "height"].map((key) => {
          const labels = {
            columns: "Columns",
            rows: "Rows",
            gap: "Gap (px)",
            width: "Cell Width (px)",
            height: "Cell Height (px)",
          };

          const stateSetters = {
            columns: setColumns,
            rows: setRows,
            gap: setGap,
            width: setWidth,
            height: setHeight,
          };

          const minValues = {
            columns: 1,
            rows: 1,
            gap: 0,
            width: 64,
            height: 64,
          };

          const maxValues = {
            columns: maxColumns,
            rows: maxRows,
            gap: maxGap,
            width: maxWidth,
            height: maxHeight,
          };

          return (
            <div className="flex flex-col w-full" key={key}>
              <Input
                id={key}
                label={labels[key]}
                value={inputValues[key]}
                onChange={(e) =>
                  handleInputChange(
                    stateSetters[key],
                    key,
                    e.target.value,
                    minValues[key],
                    maxValues[key]
                  )
                }
                onBlur={(e) =>
                  handleBlur(
                    stateSetters[key],
                    key,
                    e.target.value,
                    minValues[key],
                    maxValues[key]
                  )
                }
                className={`text-center text-gray-800 ${errors[key] ? "border-red-500 focus:border-red-500" : ""}`}
                type="number"
                min={minValues[key]}
                error={!!errors[key]}
              />
              <div className="h-5 mt-1">
                {errors[key] && (
                  <div className="text-xs text-red-500">
                    {errors[key]}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center w-full mt-4">
        <Button
          ripple={true}
          color="red"
          size="sm"
          onClick={() => {
            setItems([]);
            setColumns(5);
            setRows(5);
            setGap(8);
            setWidth(64);
            setHeight(64);
            setInputValues({
              width: 64,
              height: 64,
              columns: 1,
              rows: 1,
              gap: 0
            });
            setErrors({});
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default GridControls;