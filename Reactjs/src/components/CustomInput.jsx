import React from "react";

const CustomInput = ({value, updateInputValue}) =>  {
    console.log('rendering Custom input');
    return <>
        <input type="text" value={value} onChange={updateInputValue} />
    </>
};

export default React.memo(CustomInput);