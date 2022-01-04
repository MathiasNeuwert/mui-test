export const blueDark = {
  50: '#E2EDF8',
  100: '#CEE0F3',
  200: '#91B9E3',
  300: '#5090D3',
  main: '#5090D3',
  400: '#265D97',
  500: '#1E4976',
  600: '#173A5E',
  700: '#132F4C', // contrast 13.64:1
  800: '#001E3C',
  900: '#0A1929'
};

const theme = (mode: 'light' | 'dark') => {
  return {
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            ':disabled': {
              opacity: '0.3'
            }
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 10
          }
        }
      }
    },
    palette: {
      ...(mode === 'dark' && {
        background: {
          default: blueDark[800],
          paper: blueDark[900]
        }
      }),
      primaryDark: blueDark,
      mode,
      primary: {
        main: '#FF6262'
      },
      secondary: { main: '#4F4F4F' }
    }
  };
};

export default theme;
