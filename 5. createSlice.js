createSlice
  - is a function which takes slice name, initial state, an obect of reducer functions & automatically generates action creator and action types.
  
  - this API is the standard way of writing redux logic.
  - internally it uses createAction & createReducer only, so we can use Immer (updating the state mutably i.e mutating te state directly)

e.g

  import { createSlice } from '@reduxjs/toolkit';

  const initialState = { value: 0 }

  const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {             // this obj is equivalent to redux's traditional switch statement
      increment(state) {    //these keys will be used to create action types internally... // whenever it gets "counter/increment" action type, then this func will get execute
        state.value++
      },
      decrement(state) {
        state.value--
      },
      incrementByAmount(state, action) {
        state.value += action.payload
      },
    },
  })

  export const { increment, decrement, incrementByAmount } = counterSlice.actions      // exporting actions.... for all these actions slicename gets prefix. i.e counter/increment
  export default counterSlice.reducer
