createAction 
  is a function which helps to generate action creator function for the given action type string.
  
Action creator:- is nothing but a function which returns a plain JS object which contains action type & payload.
syntax:-
  function createAction(type, prepareAction?)



Traditional way of creating action using redux:-
    const INCREMENT = 'counter/increment'

    function increment(amount) {
      return {
        type: INCREMENT,
        payload: amount,
      }
    }

    const action = increment(3)    // { type: 'counter/increment', payload: 3 }

    
    
Creating actions using redux toolkit's createAction method:-

e.g
  import { createAction } from '@reduxjs/toolkit'
  const increment = createAction('counter/increment')   // it takes action type as an arg & returns action creator function.

  let action = increment();       // { type: 'counter/increment' }

  action = increment(3);          // returns { type: 'counter/increment', payload: 3 }

  console.log(increment.toString());      // 'counter/increment'


-------------------------------------------------------------------------------------------------------------------------------------------------
  Prepare Callback:-
  
  apart from this createAction also takes second param "prepareAction".
    by default generated action creator accept only single argument which becomes action.payload. you can see on line 32
    in some cases we may want to write some additional information on payload such as generating random ID's, timestamp of creation etc. to achieve this we can use "prepare callback"


    import { createAction, nanoid } from '@reduxjs/toolkit'

    const addTodo = createAction('todos/add', function prepare(text) {
      return {
        payload: {      // if we are using prepare callback then we must return an object with payload key, otherwise our payload value will be undefined.
          text,
          id: nanoid(),
          createdAt: new Date().toISOString(),
        },
      }
    })

    console.log(addTodo('Write more docs'))


o/p =>   {
   type: 'todos/add',
   payload: {
     text: 'Write more docs',
     id: '4AJvwMSWEHCchcWYga3dj',
     createdAt: '2019-10-03T07:53:36.581Z'
   }
}
