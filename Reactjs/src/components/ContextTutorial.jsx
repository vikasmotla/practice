import React, { createContext, useCallback, useState } from "react";
import UpdateName from "./UpdateName";
import DisplayName from "./DisplayName";

export const ContextLocal = createContext(null);

const ContextTutorial = () => {
    const [name, setName] = useState('');

    const updateNameValue = useCallback((event) => {
        setName(event.target.value);
    }, [name]);
    return <ContextLocal.Provider value={{name, updateNameValue}}>
        <UpdateName />
        <DisplayName />
    </ContextLocal.Provider>
};

export default React.memo(ContextTutorial);