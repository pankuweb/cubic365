/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';
import NavigationWrapper from './src/routes/root-natigation';
import 'react-native-gesture-handler';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationWrapper />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
