import { StyleSheet } from 'react-native';
import { Platform, Dimensions } from 'react-native';

export default StyleSheet.create({
  input: {
    width: '100%',
    padding: 10,
    alignItems: 'center', 
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45, 
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
    fontSize: 70,
    color: 'white',
  },
  placeholderDisplayText: {
    color: 'white',
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
    width: Dimensions.get('window').width * 0.18,
    height: Dimensions.get('window').width * 0.18,
    backgroundColor: '#97c166',
    borderRadius: 13,
    margin: 5, 
  },
  buttonPressed: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    backgroundColor: 'rgba( 255, 255, 255, 0.40 )',
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  // buttonInnerPressed :{
  //   width: '33%',
  //   backgroundColor: 'rgba( 255, 255, 255, 0.40 )',
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   borderStyle: 'solid',
  //   borderColor: 'transparent',
  // },
  buttonText: {
    color: '#4A4956',
    fontFamily: 'Avenir-Medium',
    fontSize: 26,
    textAlign: 'center',
  },
  buttonImage: {
    textAlign: 'center',
  },
  hide: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  blinkOn: {
    backgroundColor: '#ddd',
    lineHeight: 17,
    marginLeft: 3,
    width: 3,
    height: '100%',
  },
  blinkOff: {
    backgroundColor: '#299874',
    lineHeight: 17,
    marginLeft: 3,
    width: 3,
    height: '100%',
    opacity: 0,
  },
  cursorSpace: {
    width: 60,
    height: '100%',
  },
  paymentNumBig: {
    fontSize: 70,
    fontFamily: 'Avenir-Medium',
    color: 'white',
  }, 
  paymentNumSmall: {
    fontSize: 55,
    fontFamily: 'Avenir-Medium',
    color: 'white',
    marginTop: 15,
  }, 
});
