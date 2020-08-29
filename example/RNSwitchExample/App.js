import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import RNSwitch from './src/Switch';

const App = () => {
  const [switchState, setSwitchState] = useState(false);
  const handleOnPressSwitch = (value) => {
    setSwitchState(value);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>React Native Reanimated Switch</Text>
        <Text style={styles.header}>Default </Text>
        <RNSwitch handleOnPress={handleOnPressSwitch} value={switchState} />
        <Text style={styles.header}>Color Customisable </Text>
        <View style={styles.switchContainer}>
          <RNSwitch
            handleOnPress={handleOnPressSwitch}
            activeTrackColor="#FE5F8F"
          />
          <RNSwitch
            handleOnPress={handleOnPressSwitch}
            activeTrackColor="#667eea"
          />
          <RNSwitch
            handleOnPress={handleOnPressSwitch}
            activeTrackColor="#ed8936"
          />
          <RNSwitch
            handleOnPress={handleOnPressSwitch}
            activeTrackColor="#feb2b2"
          />
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
