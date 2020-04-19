import Typography from 'typography';
import { colors } from './constants';

const typography = new Typography({
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'PingFang SC',
    'Hiragino Sans GB',
    'Microsoft YaHei',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
  ],
  headerColor: colors.text.header,
  bodyColor: colors.text.primary,
});
export default typography;
