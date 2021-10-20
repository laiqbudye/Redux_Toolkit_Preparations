It is now official toolset for efficient redux development.

It was created to address below issues.
1. Configuring a redux store is too complicated.
2. we need to add lot of pkgs to get redux to do anything useful.
3. redux requires too much boilerplate code.


Note:- It is not limited to use in React only. we can use RTK in any JS application.

pkgs that comes with RTK in its dependencies:
1. redux:- RTK behind the scenes uses redux only. we can say it is wrapper on top of redux.

2. redux-devtools-extention:- now we dont need to install & configure devtools extention with store explicitly, RTK does that for us.

3. redux-thunk:- RTK comes with thunk middleware to handle async operations. it is default middleware in RTK. we can turn it off as well.

4. redux-immutable-state-invariant:- this is a middleware that throws an error when you try to mutate your state either inside a dispatch or between dispatches. 
THIS IS FOR DEVELOPMENT USE ONLY, DONT USE IT IN PRODUCTION, IT WILL DEGRADE THE PERFORMANCE OF YOUR APP.
  
4. & some more pkgs. to see it you can checkout pkg.json file of RTK.
