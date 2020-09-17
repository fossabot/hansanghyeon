const DefaultTheme = {
  color: {
    primary: '#0f4c81',
    bg: ['#fff', '#f6f8ff'],
    text: ['#333', '#4A4F57', '#868E96', '#dcdcdc'],
    grayscales: {
      dark: ['#3D4041', '#9b9a97'],
      light: ['#EDEDEB'],
    },
  },
  dimSpan: '#9B9A97',
};

export const DarkTheme = {
  color: {
    ...DefaultTheme.color,
    primary: '#fff46a',
    bg: ['#303437', '#232326'],
    text: ['#f2f4f7', '#e6ecf8', '#9ba4b7', '#515151'],
  },
};

export default DefaultTheme;
