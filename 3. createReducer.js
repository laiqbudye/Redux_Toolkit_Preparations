createReducer 
  is a function which simplifies process of creating redux reducers.
  it used IMMER internally which allows us to update state in a mutative way. (IMP:- we can update a state in mutable way using immer but behind the scenes immer handles that in a immutable way)
  

  e.g 
    tranditional way of writing reducer where we write switch cases for each n every action type
      
      const initialState = { value: 0 }

      function counterReducer(state = initialState, action) {
        switch (action.type) {
          case 'increment':
            return { ...state, value: state.value + 1 }
          case 'decrement':
            return { ...state, value: state.value - 1 }
          case 'incrementByAmount':
            return { ...state, value: state.value + action.payload }
          default:
            return state
        }
      }


redux toolkit way of writing reducers

      const initialState = { value: 0 }

      const counterReducer = createReducer(initialState, (builder) => {   //createReducer accepts a callback function which takes builder as arg, which is an object that contains addCase, addMatcher methods
        builder
          .addCase(increment, (state, action) => {   // if action type is increment then this code block will get execute
            state.value++                       // here we can directly update the state without copying it with spred operator
          })
          .addCase(decrement, (state, action) => {
            state.value--
          })
          .addCase(incrementByAmount, (state, action) => {
            state.value += action.payload
          })
      })
      
      
      
      
      
