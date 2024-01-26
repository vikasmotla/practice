const initialState = {
    reduxCount: 0
  }

  const cartReducer = (state = initialState, action) =>{
    switch(action.type) {
        case 'INCREMENT_cOUNT'  :
            return {
                ...state,
                reduxCount: action.value
            }
        default: 
            return state
    }
  };

  export default cartReducer;