import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.brand,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    textAlign: 'center',
    color: Colors.primary.brand,
    fontWeight: 'bold',
  },
  registerLink: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerText: {
    color: 'white',
  },
  registerLinkText: {
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
