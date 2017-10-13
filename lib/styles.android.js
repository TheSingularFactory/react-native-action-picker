import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const PADDING = 10;
const FONT_SIZE = 18;
const HIGHLIGHT_COLOR = '#4b4b4b';
const TITLE_COLOR = '#33B5E5';
const BACKGROUND_COLOR = 'rgba(255, 255, 255, 1)';

export default StyleSheet.create({
  overlayStyle: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    width: width * 0.75,
    backgroundColor:'rgba(255,255,255,0)',
    elevation: 5,
    marginBottom: height*0.1
  },

  titleContainerStyle: {
    backgroundColor: BACKGROUND_COLOR,
    padding: 1.5*PADDING,
    borderBottomColor: TITLE_COLOR,
    borderBottomWidth: 2,
  },

  titleTextStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: TITLE_COLOR
  },

  optionStyle: {
    width: width * 0.75,
    padding: PADDING ,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: BACKGROUND_COLOR,
  },

  optionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE,
    fontWeight: '500',
    color: HIGHLIGHT_COLOR
  },

});