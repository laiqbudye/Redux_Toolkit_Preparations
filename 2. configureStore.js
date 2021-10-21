configureStore:-
  this method creates a store. 
  it is a wrapper on top of createStore method.
  it includes redux-thunk as its default middleware. (we dont need to add that externally like in createstore)
  it also comes with redux devtools middleware. (we dont need to add that externally like in createstore)
  
  if we have multiple reducers like {users : usersReducer, posts : postsReducer} then we can pass them as is, configureStore will pass them to combineReducer internally.
  
  
  e.g
  const middleware = [...getDefaultMiddleware(), logger];  // when we add any new middleware, then we need to append that with default middlewares, otherwise it will overwrite those

  export default configureStore({
  reducer,            // this is mandatory param, other than reducer all params are optional
  middleware,         // An array of Redux middleware to install. If not supplied, defaults to the set of middleware returned by `getDefaultMiddleware()`.
  devtools: false     // by setting this it will disable redux devtools integration. by default true
  preloadedState: {name: "abc", age: 20}     // here we can specify initial state of store
});
