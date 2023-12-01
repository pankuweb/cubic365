import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    color: Colors.primary.brand,
  },
});
