import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
  },
  profileName: {
    marginTop: 6,
    fontSize: 26,
    fontWeight: '500',
    color: '#000',
  },
  profileEmail: {
    marginTop: 5,
    color: '#666',
  },
  manageAccountText: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 14,
    color: '#9e0fb5',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    width: '100%',
    textAlign: 'center',
    color: '#000',
    paddingBottom: 10,
    fontWeight: '500',
  },
  tabContent: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
});
