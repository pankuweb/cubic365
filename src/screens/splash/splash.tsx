import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useMemo} from 'react';
import {View, Animated} from 'react-native';
import {ImageSource} from '../../constants';
import {styles} from './styles';
type RootStackParamList = {
  DashboardScreen: undefined;
};

function SplashScreen(): JSX.Element {
  const logoOpacity = useMemo(() => new Animated.Value(0), []);
  const logoScale = useMemo(() => new Animated.Value(0), []);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('DashboardScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [logoOpacity, logoScale]);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          ...styles.logo,
          opacity: logoOpacity,
          transform: [{scale: logoScale}],
        }}
        source={ImageSource.logo}
      />
    </View>
  );
}

export default SplashScreen;
