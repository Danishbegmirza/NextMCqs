/* eslint-disable no-param-reassign */
import { Dimensions, PixelRatio, Platform } from 'react-native';
// import { getInset } from "react-native-safe-area-view";
const { width: SCREEN_WIDTH } = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

const Util = {
  normalize: (size) => {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  },
  getHeight: (percente) => {
    percente = !percente ? 100 : percente;
    return (Util.getWindowSize().height * percente) / 100;
  },
  getWidth: (percente) => {
    percente = !percente ? 100 : percente;
    return (Util.getWindowSize().width * percente) / 100;
  },
  getHeight1: (heightPercent) => {
    // percente = !percente ? 100 : percente;
    // return (Util.getWindowSize().height * percente) / 100;
    const screenHeight = Dimensions.get('window').height;
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.getPixelSizeForLayoutSize(
      (screenHeight * elemHeight) / 100
    );
  },

  formatPhoneNumber: (phoneNumberString) => {
    const cleaned = (`${phoneNumberString}`).replace(/\D/g, '');
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      const intlCode = match[1] ? '+1 ' : '';
      return [intlCode, match[2], '-', match[3], '-', match[4]].join('');
    }
    return phoneNumberString;
  },

  stringHasSpecialChars(str) {
    const regex = /^[a-zA-Z0-9 ]*$/;
    return regex.test(str);
  },
  getWindowSize: () => Dimensions.get('window'),

  getFontFamily: (type) => {
    switch (type) {
      case 'bold':
        return 'Lato-Black';
      case 'regular':
        return 'Lato-Regular';
      default:
        return 'AvertaDemoPECuttedDemo-Regular';
    }
  }
};

// module.exports = Util;
export default Util;
