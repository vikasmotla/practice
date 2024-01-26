import React, { useContext } from "react";
import { ContextLocal } from './ContextTutorial';
const UpdateName = () => {
    console.log('update name');

    const { updateNameValue, name } = useContext(ContextLocal);
    return <>
        <input type="text" onChange={updateNameValue} value={name} />
    </>
};

export default React.memo(UpdateName);