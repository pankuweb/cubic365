// import React from 'react';
// import {View, Text, FlatList} from 'react-native';
// import {StyleSheet} from 'react-native';

// const CommentList = () => {
//   const dummyComments = [
//     {
//       id: '1',
//       user: 'An anonymous Civic365 user',
//       comment: 'By Mistake',
//       date: '30/11/2023',
//     },
//     {
//       id: '2',
//       user: 'An anonymous Civic365 user',
//       comment: 'By Mistake',
//       date: '30/11/2023',
//     },
//     {
//       id: '3',
//       user: 'An anonymous Civic365 user',
//       comment: 'By Mistake',
//       date: '30/11/2023',
//     },
//     {
//       id: '4',
//       user: 'An anonymous Civic365 user',
//       comment: 'By Mistake',
//       date: '30/11/2023',
//     },
//     {
//       id: '5',
//       user: 'An anonymous Civic365 user',
//       comment: 'By Mistake',
//       date: '30/11/2023',
//     },
//     {
//       id: '6',
//       user: 'An anonymous Civic365 user',
//       comment: 'By Mistake',
//       date: '30/11/2023',
//     },
//   ];

//   const renderCommentItem = ({item}: any) => {
//     const maxAddressLength = 45;
//     const truncatedAddress =
//       item.comment.length > maxAddressLength
//         ? item.comment.substring(0, maxAddressLength - 3) + '...'
//         : item.comment;

//     return (
//       <View style={styles.commentItemContainer}>
//         <View style={styles.leftContainer}>
//           <View style={styles.userContainer}>
//             <Text style={styles.user}>{item.user}</Text>
//           </View>
//           <Text style={styles.comment}>{truncatedAddress}</Text>
//         </View>
//         <View style={styles.rightContainer}>
//           <Text style={styles.date}>{item.date}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <FlatList
//       data={dummyComments}
//       keyExtractor={item => item.id}
//       renderItem={renderCommentItem}
//     />
//   );
// };

// export const styles = StyleSheet.create({
//   commentItemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%', // Set width to 100%
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   leftContainer: {
//     flex: 7.5, // Set to 70% of the width
//   },
//   userContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   user: {
//     fontSize: 16,
//     fontWeight: '400',
//     color: '#000',
//   },
//   badge: {
//     marginLeft: 8,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 8,
//     textTransform: 'uppercase',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   comment: {
//     marginTop: 3,
//     color: '#666',
//   },
//   rightContainer: {
//     flex: 2.5, // Set to 30% of the width
//   },
//   date: {
//     fontSize: 14,
//     color: '#333',
//   },
//   followers: {
//     marginTop: 5,
//     color: '#333',
//   },
// });

// export default CommentList;
import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CommentList = () => {
  const navigation = useNavigation();

  const dummyComments = [
    {
      id: '1',
      user: 'An anonymous Civic365 user',
      comment: 'By Mistake',
      date: '30/11/2023',
    },
    {
      id: '2',
      user: 'An anonymous Civic365 user',
      comment: 'By Mistake',
      date: '30/11/2023',
    },
    {
      id: '3',
      user: 'An anonymous Civic365 user',
      comment: 'By Mistake',
      date: '30/11/2023',
    },
    {
      id: '4',
      user: 'An anonymous Civic365 user',
      comment: 'By Mistake',
      date: '30/11/2023',
    },
    {
      id: '5',
      user: 'An anonymous Civic365 user',
      comment: 'By Mistake',
      date: '30/11/2023',
    },
    {
      id: '6',
      user: 'An anonymous Civic365 user',
      comment: 'By Mistake',
      date: '30/11/2023',
    },
  ];

  const renderCommentItem = ({item}: any) => {
    const maxAddressLength = 45;
    const truncatedAddress =
      item.comment.length > maxAddressLength
        ? item.comment.substring(0, maxAddressLength - 3) + '...'
        : item.comment;

    const goToDetailScreen = () => {
      // Navigate to the detail screen with the selected item
      navigation.navigate('Details');
    };

    return (
      <TouchableOpacity onPress={goToDetailScreen}>
        <View style={styles.commentItemContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.userContainer}>
              <Text style={styles.user}>{item.user}</Text>
            </View>
            <Text style={styles.comment}>{truncatedAddress}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={dummyComments}
      keyExtractor={item => item.id}
      renderItem={renderCommentItem}
    />
  );
};

export const styles = StyleSheet.create({
  commentItemContainer: {
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
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  badge: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    textTransform: 'uppercase',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  comment: {
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

export default CommentList;
