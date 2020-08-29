import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import RNSwitch from './src/Switch';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>React Native Reanimated Switch</Text>
        <Text style={styles.header}>Default </Text>
        <RNSwitch handleOnPress={() => {}} />
        <Text style={styles.header}>Color Customisable </Text>
        <View style={styles.switchContainer}>
          <RNSwitch handleOnPress={() => {}} activeTrackColor="#FE5F8F" />
          <RNSwitch handleOnPress={() => {}} activeTrackColor="#667eea" />
          <RNSwitch handleOnPress={() => {}} activeTrackColor="#ed8936" />
          <RNSwitch handleOnPress={() => {}} activeTrackColor="#feb2b2" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    paddingVertical: 30,
  },
  switchContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
  },
});

export default App;
