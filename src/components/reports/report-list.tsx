import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ReportList = () => {
  const navigation = useNavigation();

  const dummyReports = [
    {
      id: '1',
      title: 'Street light',
      address:
        '535 Lerey watertown ny, 1030, yyius, newyork vita town near bank street 9',
      date: '30/11/2023',
      followers: 2,
      status: 'closed',
    },
    {
      id: '2',
      title: 'Street lights',
      address:
        '535 Lerey watertown ny, 1030, yyius, newyork vita town near bank street 9',
      date: '30/11/2023',
      followers: 2,
      status: 'open',
    },
    {
      id: '3',
      title: 'Street lights',
      address:
        '535 Lerey watertown ny, 1030, yyius, newyork vita town near bank street 9',
      date: '30/11/2023',
      followers: 2,
      status: 'acknowledged',
    },
    {
      id: '4',
      title: 'Street lights',
      address:
        '535 Lerey watertown ny, 1030, yyius, newyork vita town near bank street 9',
      date: '30/11/2023',
      followers: 2,
      status: 'open',
    },
    {
      id: '5',
      title: 'Street lights',
      address:
        '535 Lerey watertown ny, 1030, yyius, newyork vita town near bank street 9',
      date: '30/11/2023',
      followers: 2,
      status: 'acknowledged',
    },
    {
      id: '6',
      title: 'Street lights',
      address:
        '535 Lerey watertown ny, 1030, yyius, newyork vita town near bank street 9',
      date: '30/11/2023',
      followers: 2,
      status: 'acknowledged',
    },
  ];

  const getStatusBadgeColor = (status: any) => {
    switch (status) {
      case 'closed':
        return '#007BFF'; // Blue
      case 'open':
        return '#FFA500'; // Orange
      case 'acknowledged':
        return '#28a745'; // Green
      default:
        return '#007BFF'; // Default to Blue
    }
  };

  const renderReportItem = ({item}: any) => {
    const maxAddressLength = 45;
    const truncatedAddress =
      item.address.length > maxAddressLength
        ? item.address.substring(0, maxAddressLength - 3) + '...'
        : item.address;

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <View style={styles.reportItemContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <View
                style={[
                  styles.badge,
                  {backgroundColor: getStatusBadgeColor(item.status)},
                ]}>
                <Text style={styles.badgeText}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </Text>
              </View>
            </View>
            <Text style={styles.address}>{truncatedAddress}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.followers}>{item.followers} followers</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={dummyReports}
      keyExtractor={item => item.id}
      renderItem={renderReportItem}
    />
  );
};

export const styles = StyleSheet.create({
  reportItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Set width to 100%
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leftContainer: {
    flex: 7.5, // Set to 70% of the width
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  badge: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    textTransform: 'uppercase',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  address: {
    marginTop: 3,
    color: '#666',
  },
  rightContainer: {
    flex: 2.5, // Set to 30% of the width
  },
  date: {
    fontSize: 14,
    color: '#333',
  },
  followers: {
    marginTop: 5,
    color: '#333',
  },
});

export default ReportList;
