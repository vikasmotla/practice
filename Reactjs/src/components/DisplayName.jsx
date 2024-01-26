import React, { useContext } from "react";
import { ContextLocal } from './ContextTutorial';
const DisplayName = () => {
    console.log('display name');

    const { name } = useContext(ContextLocal);

    return <>
        <div>My name is {name}</div>
    </>
};

export default React.memo(DisplayName);