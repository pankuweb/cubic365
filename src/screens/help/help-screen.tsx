import * as React from 'react';
import {Text, View, TouchableOpacity, Linking, StyleSheet} from 'react-native';

function HelpScreen(): JSX.Element {
  const handleVisitResourceCenter = () => {
    // Open the link to the resource center
    // Linking.openURL('https://www.civic365.com/resource-center');
  };

  const handleEmailUs = () => {
    // Open the default email application to compose an email
    // Linking.openURL('mailto:support@civic365.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help</Text>
      <Text style={styles.subtitle}>Civic365</Text>
      <Text style={styles.infoText}>
        For more information about Civic365 or to ask questions about the
        application
      </Text>
      <TouchableOpacity onPress={handleVisitResourceCenter}>
        <Text style={styles.linkText}>Visit Our Resource Center</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity onPress={handleEmailUs}>
        <Text style={styles.linkText}>Email Us</Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>
        To submit a request, tab the New Request (+) button in the bottom
        navigation bar
      </Text>
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
  infoText: {
    fontSize: 18,
    marginBottom: 30,
    marginTop: 30,
  },
  linkText: {
    color: '#0047ab',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  orText: {
    fontSize: 18,
    marginVertical: 4,
  },
});

export default HelpScreen;
