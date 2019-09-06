- [ ] Why would you use class component over function components (removing hooks from the question)?
    You would use class components rather than functional components if you had to work with legacy code. 

- [ ] Name three lifecycle methods and their purposes.
  * the constructor() method in class components is where the state data is initialized, it called in the mounting phase of a component's lifecycle.
  * the render () method is a must when creating class component, without it the class component will not work. It invoked after the constructor function and it is called in both the mounting and the updating phase. The Render Function's main purpose is to tell the React what should be mounted on the DOM.
  * the componentWillUnmount function is only called in the Death phase of a component. it is used to clean up components after they have been used.

- [ ] What is the purpose of a custom hook?
  * custom hooks allow you to keep you code DRY with i's ability to consolidate multiple hooks into one powerful custom hook that can be used throughout your App

- [ ] Why is it important to test our apps?
  * testing is important, because is allows you to have confidence in your code, inaddition to reducing the risk of having bugs pass on to the final product and maybe having to spend large amounts of do manual testing.  
