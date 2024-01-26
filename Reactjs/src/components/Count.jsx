import React from "react";

const Count = ({count, incrementCount}) => {
    console.log('rendering Count');
    return <>
        <button onClick={incrementCount}>Count is {count}</button>
    </>
};

export default React.memo(Count);