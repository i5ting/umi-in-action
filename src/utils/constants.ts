const palette = {
  blue: {
    90: '#004ca3',
    80: '#006ac1',
    70: '#047bd3',
    60: '#0e8de6',
    50: '#0d96f2',
    40: '#3fa9f5',
    30: '#63b8f6',
    20: '#90cdf9',
    10: '#dbf0ff',
    5: '#f5fcff',
  },
  grey: {
    90: '#232129',
    80: '#36313d',
    70: '#48434f',
    60: '#635e69',
    50: '#78757a',
    40: '#b7b5bd',
    30: '#d9d7e0',
    20: '#f0f0f2',
    10: '#f5f5f5',
    5: '#fbfbfb',
  },
  white: '#ffffff',
  black: '#000000',
};

export const colors = {
  ...palette,
  ui: {
    hover: palette.blue[60],
  },
  link: {
    color: palette.blue[50],
    border: palette.blue[30],
    hoverBorder: palette.blue[50],
  },
  text: {
    header: palette.grey[90],
    primary: palette.grey[80],
    secondary: palette.grey[50],
    placeholder: palette.grey[40],
  },
  input: {
    border: palette.grey[10],
    focusBorder: palette.blue[40],
    focusBoxShadow: palette.blue[20],
  },
};

export const fontSizes = {};
