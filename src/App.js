import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router/native-stack';

// START: App Colors
// {
//   yellow: '#FFC700',
//   gray: '#8D92A3',
//   green: '#1ABC9C',
//   red: '#D9435E',
//   black: "#020202"
// }
// END: App Colors

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
