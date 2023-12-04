import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {ImageSource} from '../../constants';

function AuthScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={ImageSource.logo} style={styles.image} />

      <Text style={styles.title}>Welcome to Civic365</Text>
      <Text style={styles.description}>
        Submit issues, see them get fixed, connect with your neighbors. The
        answer for what you can do to improve your community.
      </Text>

      <View style={styles.buttonContainer}>
        <LinearGradient
          colors={['#9e0fb5', '#0047ab']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['#0047ab', '#9e0fb5']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

export default AuthScreen;
