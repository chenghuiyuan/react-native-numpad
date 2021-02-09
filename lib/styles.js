import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  input: {
    width: '100%',
    padding: 10,
    alignItems: 'center', 
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45, 
    backgroundColor: 'rgba( 184, 251, 226, 0.35 )',
    paddingVertical: 20,
  },
  display: {
    padding: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  activeDisplay: {
    backgroundColor: 'transparent',
  },
  activeDisplayText: {},
  invalidDisplayText: {},
  displayText: {
    fontSize: 30,
    color: 'white',
  },
  placeholderDisplayText: {
    color: '#ddd',
  },
  cursor: {
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  pad: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '33%',
  },
  buttonText: {
    color: '#4A4956',
    fontFamily: 'Avenir-Medium',
    fontSize: 26,
    textAlign: 'center',
  },
  hide: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  blinkOn: {
    borderBottomColor: '#ddd',
  },
  blinkOff: {
    borderBottomColor: 'transparent',
  },
});
