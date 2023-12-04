/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import DropdownModal from '../../components/header-dropdown/header-dropdown';
import {styles} from './style';
import ReportList from '../../components/reports/report-list';
import CommentList from '../../components/reports/comment-list';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('REPORTS');

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleTabPress = (tabName: any) => {
    setActiveTab(tabName);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerRight: () => (
        <TouchableOpacity onPress={toggleDropdown}>
          <Ionicons
            name="ellipsis-vertical-outline"
            size={24}
            color="#fff"
            style={{marginRight: 15}}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isDropdownVisible]);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://t4.ftcdn.net/jpg/02/17/34/67/360_F_217346796_TSg5VcYjsFxZtIDK6Qdctg3yqAapG7Xa.jpg',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@gmail.com</Text>

        <Text style={styles.manageAccountText}>Manage Account</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => handleTabPress('REPORTS')}
          style={styles.tab}>
          <Text
            style={[
              styles.tabText,
              {
                borderBottomWidth: activeTab === 'REPORTS' ? 5 : 0,
                borderColor: '#9e0fb5',
              },
            ]}>
            REPORTS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleTabPress('COMMENTS')}
          style={styles.tab}>
          <Text
            style={[
              styles.tabText,
              {
                borderBottomWidth: activeTab === 'COMMENTS' ? 5 : 0,
                borderColor: '#9e0fb5',
              },
            ]}>
            COMMENTS
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'REPORTS' ? <ReportList /> : <CommentList />}

      <DropdownModal
        isVisible={isDropdownVisible}
        toggleDropdown={toggleDropdown}
      />
    </View>
  );
};

export default ProfileScreen;
