import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles.tsx';

const Loader = ({state}: {state: boolean}) => {
  if (!state) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ActivityIndicator size="large" />
        <Text>Loading ...</Text>
      </View>
    </View>
  );
};

export default Loader;
