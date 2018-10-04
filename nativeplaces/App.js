import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';

//Register Screens
Navigation.registerComponent("native-places.AuthScreen", () => AuthScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'native-places.AuthScreen',
    title: 'Login'
  }
})
