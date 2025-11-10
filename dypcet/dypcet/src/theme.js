import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366',
      contrastText: '#fff',
      dark: '#002244',
      light: '#336699',
    },
    secondary: {
      main: '#ffcc00',
      contrastText: '#003366',
    },
    background: {
      default: '#f5f7fa',
      paper: '#fff',
    },
    text: {
      primary: '#222',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 },
      },
    },
  },
});

export default theme;
