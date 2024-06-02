import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profilePic: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20,
  },
  logo: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    width: 330,
    borderRadius: 15,
    borderWidth: 0.5,
  },
  blackBtnText: {
    color: 'black',
    fontWeight: '400',
    letterSpacing: 1,
    fontSize: 18,
    paddingStart: 8,
  },
  fbBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0866FF',
    padding: 15,
    margin: 10,
    width: 330,
    borderRadius: 15,
  },
  appleBtn: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    width: 330,
    borderRadius: 15,
  },
  logoutBtn: {
    backgroundColor: 'red',
    marginTop: 100,
    alignItems: 'center',
    padding: 15,
    margin: 10,
    width: 250,
    borderRadius: 15,
  },
  whiteBtnText: {
    color: 'white',
    fontWeight: '400',
    letterSpacing: 1,
    fontSize: 18,
    paddingStart: 8,
  },
  error: {
    margin: 20,
    textAlign: 'center',
    color: '#D8000C',
  },
  input: {
    width: 320,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default styles;
