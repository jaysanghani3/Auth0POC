import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useAuthWrapper} from '../../hooks/AuthWrapper';

const SplashScreen = ({navigation}: any) => {
  const {isLoggedIn} = useAuthWrapper();
  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) {
        navigation.replace('WelcomeScreen');
      } else {
        navigation.replace('LoginScreen');
      }
    }, 2000);
  }, [isLoggedIn, navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
