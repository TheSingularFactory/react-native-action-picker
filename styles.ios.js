import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const PADDING = 15;
const BORDER_RADIUS = 5;
const FONT_SIZE = 20;
const UI_WIDTH = width * 0.95;
const HIGHLIGHT_COLOR = 'rgba(0,118,255,1)';

export default StyleSheet.create({
  overlayStyle: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center'
  },

  container: {
    width: UI_WIDTH,
    borderRadius: BORDER_RADIUS,
    backgroundColor:'rgba(255,255,255,0.8)',
    position: 'absolute',
    bottom: 80
  },

  optionContainer: {
    padding: PADDING,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  cancelContainer: {
    borderRadius: BORDER_RADIUS,
    width: UI_WIDTH,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: PADDING,
    position: 'absolute',
    bottom: 20,
  },

  optionStyle: {
    padding: PADDING,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: UI_WIDTH
  },

  lastOptionStyle: {
    padding: PADDING,
  },

  optionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE,
    color: HIGHLIGHT_COLOR
  },

  cancelTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: FONT_SIZE
  },
});