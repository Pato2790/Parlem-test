import React from 'react';
import { Typography, Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './Themes/theme';
import ClientsList from './Components/ClientsList/ClientsList';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography component="div">
        <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h2.fontSize" m={3}>
          Parlem Telecom
        </Box>
      </Typography>
      <Typography component="div">
        <Box textAlign="center" fontSize="h6.fontSize" m={3}>
          Estas son nuestros clientes y los productos que han adquirido! Sumate a Parlem Telecom.
        </Box>
      </Typography>
      <ClientsList />
    </ThemeProvider>
  );
}

export default App;
