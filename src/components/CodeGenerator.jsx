import CopyCode from "./CopyCode";
import React from 'react';

const CodeGenerator = ({items,width,height}) => {
    const divsInGrid = new Map();
    
    items.forEach((x) => {
        divsInGrid.set(x.number, [x.column, x.row, x.colspan, x.rowspan]);
    });
    let divs = `<div id="parent"> \n`;
    divsInGrid.forEach((key,item)=>{
        divs = divs + `<div id=div${key}> ${key} </div> \n`;
    })
    divs = divs + '\n';
    return (
        <div>CodeGenerator</div>
    )
}

export default CodeGenerator