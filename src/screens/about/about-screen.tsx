import * as React from 'react';
import {Text, View, TouchableOpacity, Linking, StyleSheet} from 'react-native';

function AboutScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.subtitle}>Civic365</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.termsButton]}
          onPress={() => {
            // Linking.openURL('https://www.civic365.com/terms'),
            console.log('asfd');
          }}>
          <Text style={styles.buttonText}>TERMS OF SERVICE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.privacyButton]}
          onPress={() => {
            // Linking.openURL('https://www.civic365.com/terms'),
            console.log('asfd');
          }}>
          <Text style={styles.buttonText}>PRIVACY</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.versionText}>VERSION</Text>
      <Text style={styles.smallVersionText}>2.2.2</Text>
      <Text style={styles.versionText}>DEVICE</Text>
      <Text style={styles.smallVersionText}>CHP2233</Text>
      <Text style={styles.versionText}>ANDROID VERSION</Text>
      <Text style={styles.smallVersionText}>33</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 94,
    fontWeight: 'bold',
    marginBottom: -40,
    color: '#d482e1',
  },
  subtitle: {
    fontSize: 44,
    marginBottom: 0,
    color: '#6698de',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#0047ab',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0047ab',
    fontSize: 14,
  },
  termsButton: {
    marginRight: 5,
  },
  privacyButton: {
    marginLeft: 5,
  },
  versionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallVersionText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default AboutScreen;
