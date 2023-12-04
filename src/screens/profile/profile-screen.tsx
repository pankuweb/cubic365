// ProfileScreen.tsx

import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerRight: () => (
        <Ionicons
          name="ellipsis-vertical-outline"
          size={24}
          color="#fff"
          onPress={() => {
            // Handle the press event, for example, show a dropdown menu
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
