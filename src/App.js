import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router/native-stack';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import Loading from './components/Loading';
import store from './redux/store';
import {listen} from './redux/listener';

// START: App Colors
// {
//   yellow: '#FFC700',
//   gray: '#8D92A3',
//   green: '#1ABC9C',
//   red: '#D9435E',
//   black: "#020202"
// }
// END: App Colors

const MainApp = () => {
  const {isLoading} = useSelector(state => state.loadingReducers);

  useEffect(() => {
    listen();
  }, []);

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="bottom" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
