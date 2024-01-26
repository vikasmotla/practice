import React from "react";
import { useSelector,  useDispatch } from "react-redux";

const ReduxConcept = () => {
    const state = useSelector((state)=>state);
    const dispatch = useDispatch();
    const updateReduxCount = ()=>{
        dispatch({type: 'INCREMENT_cOUNT', value: state.reduxCount + 1})
    }

    return <>
        <div>React Redux</div>
        <button onClick={updateReduxCount}>Change Count {state.reduxCount}</button>
    </>
};

export default React.memo(ReduxConcept);