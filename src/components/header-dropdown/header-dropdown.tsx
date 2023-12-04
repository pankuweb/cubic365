// DropdownModal.js
import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './style'; // Import the styles file
import {useNavigation} from '@react-navigation/native';

const DropdownModal = ({isVisible, toggleDropdown}: any) => {
  const navigation = useNavigation();

  const handleOptionPress = (screen: string) => {
    toggleDropdown(); // Close the dropdown when an option is pressed

    if (screen === 'NotificationsScreen') {
      // Open the device's notification settings
      Linking.openSettings();
    } else {
      // Navigate to the specified screen
      navigation.navigate(screen);
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleDropdown}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropColor="transparent"
      backdropOpacity={0}
      style={styles.modalContainer} // Apply the styles from the stylesheet
    >
      <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={() => handleOptionPress('About')}>
          <Text style={styles.optionText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionPress('Help')}>
          <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOptionPress('NotificationsScreen')}>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionPress('HomeScreen')}>
          <Text style={styles.optionText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DropdownModal;
