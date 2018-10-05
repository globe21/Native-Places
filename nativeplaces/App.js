import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import configureStore from './src/store/configureStore';

const store = configureStore();

//Register Screens
Navigation.registerComponent(
  "native-places.AuthScreen",
   () => AuthScreen,
    store,
    Provider);
Navigation.registerComponent(
  "native-places.SharePlaceScreen",
   () => SharePlaceScreen,
    store,
    Provider);
Navigation.registerComponent(
  "native-places.FindPlaceScreen",
   () => FindPlaceScreen,
    store,
    Provider);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'native-places.AuthScreen',
    title: 'Login'
  }
});
