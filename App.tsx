import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import config from './auth.config.json';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/navigators/AuthNavigation';
import MethodCheckScreen from './src/screens/MethodCheckScreen';
const App = () => {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      {/* <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer> */}
      <MethodCheckScreen />
    </Auth0Provider>
  );
};

export default App;
