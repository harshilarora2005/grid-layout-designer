import CopyCode from "./CopyCode";
import React from 'react';

const CodeGenerator = ({items,width,height}) => {
    const divsInGrid = new Map();
    console.log(items);
    items.forEach((x) => {
        divsInGrid.set(x.number, [x.column, x.row, x.colspan, x.rowspan]);
    });
    console.log(divsInGrid);
    let divs = `<div id="parent"> \n`;
    divsInGrid.forEach((value,key)=>{
        console.log(key);
        divs = divs + `\t<div id="div${key}"> ${key} </div> \n`;
    })
    divs = divs + '\n</div>';
    return (
        <div className="flex">
            <CopyCode 
            code={divs}/>
        </div>
    )
}

export default CodeGenerator