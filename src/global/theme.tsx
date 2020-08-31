import { createTheme, BaseTheme } from '@shopify/restyle';
import { fontFamily } from './styles';

export const palette = {
  mintTulip: '#BFEAF5',
  padua: '#BEECC4',
  peach: '#FFE4D9',
  pippin: '#FFDDDD',
  shamrock: '#2CB9B0',
  gray: '#F4F0EF',

  textTitle: '#0C0D34',
  textBody: 'rgba(12, 13, 52, 0.7)',
  white: '#fff',
};

const theme: BaseTheme = createTheme({
  colors: {
    ...palette,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: fontFamily.bold,
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontFamily: fontFamily.semibold,
      fontSize: 28,
      lineHeight: 30,
      color: 'textTitle',
    },
    title2: {
      fontFamily: fontFamily.semibold,
      fontSize: 24,
      lineHeight: 30,
      color: 'textTitle',
    },
    body: {
      fontFamily: fontFamily.regular,
      fontSize: 16,
      lineHeight: 24,
      color: 'textBody',
    },
    buttonLabel: {
      fontSize: 15,
      fontFamily: fontFamily.semibold,
      textAlign: 'center',
    },
  },
});

export type Theme = typeof theme;
export default theme;
