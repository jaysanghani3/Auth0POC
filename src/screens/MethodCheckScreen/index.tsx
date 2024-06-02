import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from '../LoginScreen/styles';
import {
  loginWithEmailPassword,
  loginwithSocial,
  signupWithEmailPassword,
  forgotPassword,
} from '../utils/methods';

const SignupScreen = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [cred, setCred] = useState({
    username: '',
    password: '',
  });

  const handleSignup = async () => {
    try {
      const res = await signupWithEmailPassword(userDetails);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCustomLogin = async () => {
    try {
      const res = await loginWithEmailPassword(cred);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const forgotPasswordBtn = async () => {
    try {
      const res = await forgotPassword(cred.username);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSocialLogin = async (
    connection: 'facebook' | 'google-oauth2' | 'apple',
  ) => {
    try {
      const res = await loginwithSocial(connection);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{flex: 1, padding: 15}}>
      <Text>SignupScreen</Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'black', marginVertical: 10}}
        onChangeText={val => setUserDetails({...userDetails, username: val})}
        placeholder="Username"
      />
      <TextInput
        style={{borderWidth: 1, borderColor: 'black', marginVertical: 10}}
        onChangeText={val => setUserDetails({...userDetails, email: val})}
        placeholder="Email"
      />
      <TextInput
        style={{borderWidth: 1, borderColor: 'black', marginVertical: 10}}
        onChangeText={val => setUserDetails({...userDetails, password: val})}
        placeholder="Password"
      />
      <Pressable style={styles.btn} onPress={handleSignup}>
        <Text>Signup</Text>
      </Pressable>

      <Text>Login</Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'black', marginVertical: 10}}
        onChangeText={val => setCred({...cred, username: val})}
        placeholder="Email"
      />
      <TextInput
        style={{borderWidth: 1, borderColor: 'black', marginVertical: 10}}
        onChangeText={val => setCred({...cred, password: val})}
        placeholder="Password"
      />
      <Pressable style={styles.btn} onPress={handleCustomLogin}>
        <Text>Login</Text>
      </Pressable>
      <Pressable
        style={styles.fbBtn}
        onPress={() => handleSocialLogin('facebook')}>
        <Text>Login with Facebook</Text>
      </Pressable>
      <Pressable style={styles.logoutBtn} onPress={forgotPasswordBtn}>
        <Text>Forgot Password</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;
