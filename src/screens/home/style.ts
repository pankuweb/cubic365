import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 210,
  },
  compStatusCards: {
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginVertical: 8,
    textAlign: 'center',
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counter: {
    fontSize: 12,
    marginVertical: 3,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});
