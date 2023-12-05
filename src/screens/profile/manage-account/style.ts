import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    backgroundColor: '#9e0fb5',
    padding: 14,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
  notice: {
    borderColor: '#0047ab',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
    backgroundColor: '#dae2ee',
  },
  noticeTag: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  noticeText: {
    color: '#0f56ba',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    color: 'black',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 40,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#eee',
    height: 40,
    justifyContent: 'center',
  },
  picker: {
    height: 40,
    fontSize: 12,
  },
  pickerItem: {
    fontSize: 12,
  },
  pageDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 20,
  },
  saveChangesButton: {
    backgroundColor: '#9e0fb5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveChangesButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteAccountSection: {
    marginTop: 20,
  },
  deleteAccountTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  deleteAccountDescription: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
  deleteAccountButton: {
    backgroundColor: '#cb0808',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  deleteAccountButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
