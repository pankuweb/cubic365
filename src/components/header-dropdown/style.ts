// style.js
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  dropdownContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 180,
    width: 200,
    position: 'absolute',
    top: 2,
    right: 2,
    borderWidth: 1,
    borderColor: '#e1dede',
  },
  optionText: {
    fontSize: 16,
    marginBottom: 18,
    color: 'black',
  },
});
