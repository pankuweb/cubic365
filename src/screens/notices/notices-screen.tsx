/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DropdownModal from '../../components/header-dropdown/header-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NoticesScreen = () => {
  const navigation = useNavigation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Notices',
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

  const dummyComments = [
    {
      id: '1',
      user: 'City of Syracuse- SYRCityline',
      comment: 'Syracuse frequently asked questions and tutorials',
      date: '30/11/2023',
    },
    {
      id: '2',
      user: 'City of Syracuse- SYRCityline',
      comment: 'Syracuse frequently asked questions and tutorials',
      date: '30/11/2023',
    },
    {
      id: '3',
      user: 'City of Syracuse- SYRCityline',
      comment: 'Syracuse frequently asked questions and tutorials',
      date: '30/11/2023',
    },
    {
      id: '4',
      user: 'City of Syracuse- SYRCityline',
      comment: 'Syracuse frequently asked questions and tutorials',
      date: '30/11/2023',
    },
    {
      id: '5',
      user: 'City of Syracuse- SYRCityline',
      comment: 'Syracuse frequently asked questions and tutorials',
      date: '30/11/2023',
    },
    {
      id: '6',
      user: 'City of Syracuse- SYRCityline',
      comment: 'Syracuse frequently asked questions and tutorials',
      date: '30/11/2023',
    },
  ];

  const renderCommentItem = ({item}: any) => {
    const maxAddressLength = 30;
    const truncatedAddress =
      item.user.length > maxAddressLength
        ? item.user.substring(0, maxAddressLength - 3) + '...'
        : item.user;

    const goToDetailScreen = () => {
      // Navigate to the detail screen with the selected item
      navigation.navigate('Details');
    };

    return (
      <TouchableOpacity onPress={goToDetailScreen}>
        <View style={styles.commentItemOuterContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Syracuse_NY.jpg',
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.commentItemContainer}>
            <View style={styles.commentItemContainerInner}>
              <View style={styles.leftContainer}>
                <View style={styles.userContainer}>
                  <Text style={styles.user}>{truncatedAddress}</Text>
                </View>
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
            <Text style={styles.comment}>{item.comment}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        data={dummyComments}
        keyExtractor={item => item.id}
        renderItem={renderCommentItem}
      />
      <DropdownModal
        isVisible={isDropdownVisible}
        toggleDropdown={toggleDropdown}
      />
    </>
  );
};

const styles = StyleSheet.create({
  commentItemOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Set width to 100%
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  commentItemContainer: {
    flex: 1,
  },
  commentItemContainerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 7.5, // Set to 75% of the width
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  rightContainer: {
    flex: 2.5, // Set to 25% of the width
  },
  date: {
    fontSize: 12,
    color: '#333',
  },
  comment: {
    marginTop: 3,
    color: '#666',
  },
});

export default NoticesScreen;
