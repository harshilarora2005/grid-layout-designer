import CopyCode from "./CopyCode";
import React from "react";

const CodeGenerator = ({ items, width, height, gap, rows, columns }) => {
    const divsInGrid = new Map();
    console.log(items);
    items.forEach((x) => {
        divsInGrid.set(x.number, [x.col, x.row, x.colSpan, x.rowSpan]);
    });
    console.log(divsInGrid);
    let divs = `<div id="parent">\n`;
    let css = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #parent {
            display: grid;
            grid-template-columns: repeat(${columns}, ${width}px);
            grid-template-rows: repeat(${rows}, ${height}px);
            gap: ${gap}px;
            width: ${columns * width + (columns - 1) * gap}px;
            height: ${rows * height + (rows - 1) * gap}px;
            border: 1px solid black;
        }
    `;

    divsInGrid.forEach((value, key) => {
        const [col, row, colspan, rowspan] = value;
        divs += `\t<div id="div${key}"> ${key} </div>\n`;
        
        let gridProps = `
        #div${key} {
            grid-column: ${col} / span ${colspan};
            grid-row: ${row} / span ${rowspan};
            background-color: lightgray;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
        }
        `;
        
        css += gridProps;
    });

    divs += "</div>";
    
    return (
        <div className="flex gap-4 items-center justify-center w-full">
            <CopyCode code={divs} language="html" />    
            <CopyCode code={css} language="css" />
        </div>
    );
};

export default CodeGenerator;
