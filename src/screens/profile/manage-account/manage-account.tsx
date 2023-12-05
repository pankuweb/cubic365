import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-crop-picker';
import {styles} from './style';

function ManageAccountScreen(): JSX.Element {
  const [displayName, setDisplayName] = useState('');
  const [timezone, setTimezone] = useState('UTC');
  const [language, setLanguage] = useState('en');
  const [avatar, setAvatar] = useState(null); // State to store the selected image URI

  const timezones = ['UTC', 'GMT', 'EST', 'PST'];
  const languages = ['English', 'Spanish', 'French'];

  const handleSaveChanges = () => {
    console.log('Changes saved!');
  };

  const handleDeleteAccount = () => {
    console.log('Account deleted!');
  };

  const handleImagePicker = async () => {
    try {
      await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        setAvatar(image.path);
      });
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Preferences</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.notice}>
          <Text style={styles.noticeText}>
            <Text style={styles.noticeTag}>Notice:</Text> Please check your
            email to confirm this action and complete deletion of your account.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Display Name</Text>
          <TextInput
            style={styles.input}
            value={displayName}
            onChangeText={text => setDisplayName(text)}
            placeholder="Enter your display name"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Manage password on Civic365 Platform: Community
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Upload an Avatar</Text>
          <View style={styles.imagePickerContainer}>
            <TouchableOpacity
              style={styles.imagePickerButton}
              onPress={handleImagePicker}>
              <Text style={styles.imagePickerButtonText}>Choose file</Text>
            </TouchableOpacity>
            {avatar ? (
              <View style={styles.avatarContainer}>
                <Image source={{uri: avatar}} style={styles.avatarImage} />
              </View>
            ) : (
              <Text style={styles.path}>No file chosen</Text>
            )}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Timezone</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={timezone}
              style={styles.picker}
              onValueChange={itemValue => setTimezone(itemValue)}
              itemStyle={styles.pickerItem} // Set style for picker items
            >
              {timezones.map(tz => (
                <Picker.Item key={tz} label={tz} value={tz} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Language</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={language}
              style={styles.picker}
              onValueChange={itemValue => setLanguage(itemValue)}
              itemStyle={styles.pickerItem} // Set style for picker items
            >
              {languages.map(lang => (
                <Picker.Item key={lang} label={lang} value={lang} />
              ))}
            </Picker>
          </View>
        </View>
        <TouchableOpacity
          style={styles.saveChangesButton}
          onPress={handleSaveChanges}>
          <Text style={styles.saveChangesButtonText}>Save Changes</Text>
        </TouchableOpacity>
        <View style={styles.pageDivider} />
        <View style={styles.deleteAccountSection}>
          <Text style={styles.deleteAccountTitle}>Delete Your Account</Text>
          <Text style={styles.deleteAccountDescription}>
            Deleting your account is irreversible. You will have to create a new
            account in order to use Civic365 in the future.
          </Text>
          <TouchableOpacity
            style={styles.deleteAccountButton}
            onPress={handleDeleteAccount}>
            <Text style={styles.deleteAccountButtonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default ManageAccountScreen;
