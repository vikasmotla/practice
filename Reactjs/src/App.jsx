import { useCallback, useReducer, useState } from 'react'
import Count from './components/Count'
import CustomInput from './components/CustomInput';
import FetchData from './components/FetchData';
import ContextTutorial from './components/ContextTutorial'
import ReduxConcept from './components/ReduxConcept'
import RouterConcept from './components/RouterConcept'


const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {...state, count: action.value}
    case 'INPUT_VALUE':
      return {...state, inputValue: action.value}
    default:
      return state;
  }
};

function App() {
  // const [count, setCount] = useState(0)
  // const [inputValue, setInputValue] = useState('');
  const initialState = {
    count: 0,
    inputValue: ''
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementCount = useCallback(() => {
    // setCount(count+1);
    dispatch({type: 'INCREMENT_COUNT', value: state.count+1})
  }, [state.count]);

  const updateInputValue = useCallback((event) => {
    const newValue = event.target.value;
    // setInputValue(newValue);
    dispatch({type: 'INPUT_VALUE', value: newValue})
  }, [state.inputValue]);

  console.log('rendering App');

  return (
    <>
      <div>
        <Count count={state.count} incrementCount={incrementCount} />
        <CustomInput value={state.inputValue} updateInputValue={updateInputValue}/>
        <FetchData />
        <ContextTutorial />
        <ReduxConcept />
        <RouterConcept />
      </div>
    </>
  )
}

export default App
