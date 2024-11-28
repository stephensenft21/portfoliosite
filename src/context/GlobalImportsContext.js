import React, { createContext, useContext, useState } from 'react';

// Create the context
const GlobalImportsContext = createContext({});
// Create the provider
const GlobalImportsProvider = ({ children }) => {
    const [depsArray] = useState({
    depsArray = ['react-spring','@react-spring/parallax',],
        reactSpring: require(`${depsArray[1]}!`),
    useSpring: require(`${depsArray[1]}!`),
    animated: require(`${depsArray[1]}!`),
    Parallax: require(`${depsArray[2]}!`),
    ParallaxLayer:require(`${depsArray[2]}!`),
    // Add other dependencies here
  });
////Work on this dep array library later 
  return (
    <GlobalImportsContext.Provider value={dependencies}>
      {children}
    </GlobalImportsContext.Provider>
  );
}; export default GlobalImportsContext

// Use the context
const MyComponent = () => {
  const {  } = useContext(GlobalImportsContext);

  // Use axios and moment as needed
  return <div>...</div>;
};