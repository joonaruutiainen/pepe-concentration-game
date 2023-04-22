import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#ab47bc',
    },
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1800,
      xxl: 2200,
      xxxl: 3000,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Helvetica',
      fontSize: 34,
      fontWeight: 'bold',
      color: '#f2f2f2',
    },
    h2: {
      fontFamily: 'Helvetica',
      fontSize: 26,
    },
    body1: {
      fontFamily: 'Helvetica',
      fontSize: 18,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: '2px 3px 15px 2px rgba(0, 0, 0, 0.6)',
        },
      },
    },
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <div className='header'>
          <NavBar />
        </div>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
