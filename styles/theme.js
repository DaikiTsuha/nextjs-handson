import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#80cbc4',
    },
    secondary: {
      main: '#4dd0e1',
    },
  },
});

export default theme;
