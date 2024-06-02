import React from 'react';
import {View, Text, Pressable, Image, TextInput} from 'react-native';
// import {useAuthWrapper} from '../../hooks/AuthWrapper';
import styles from './styles';
// import Loader from '../../components/Loader';
import {loginWithEmailPassword, loginwithSocial} from '../utils/methods';
const LoginScreen = ({navigation}: any) => {
  // const {loading, Login, isLoggedIn} = useAuthWrapper();

  const [cred, setCred] = React.useState({
    username: '',
    password: '',
  });

  // const handleLogin = (connectionName: any) => async () => {
  //   try {
  //     await Login(connectionName);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const handleLogin = async (
    connectionName: 'facebook' | 'google-oauth2' | 'apple',
  ) => {
    try {
      const res = await loginwithSocial(connectionName);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignIn = async () => {
    try {
      const res = await loginWithEmailPassword(cred);
      console.log(res);
      if (res) {
        navigation.navigate('WelcomeScreen', {token: res});
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      {/* <Loader state={loading} /> */}
      <TextInput
        style={styles.input}
        placeholder="Email or Username"
        onChangeText={val => setCred({...cred, username: val})}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={val => setCred({...cred, password: val})}
      />
      <Pressable style={styles.btn} onPress={handleSignIn}>
        <Text style={styles.blackBtnText}>Login</Text>
      </Pressable>
      <Pressable style={styles.fbBtn} onPress={() => handleLogin('facebook')}>
        <Image
          source={require('../../assets/images/facebook-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.whiteBtnText}>Continue with Facebook</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => handleLogin('google-oauth2')}>
        <Image
          source={require('../../assets/images/google-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.blackBtnText}>Continue with Google</Text>
      </Pressable>
      <Pressable style={styles.appleBtn} onPress={() => handleLogin('apple')}>
        <Image
          source={require('../../assets/images/apple-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.whiteBtnText}>Continue with Apple</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
