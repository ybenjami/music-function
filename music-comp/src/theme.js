// @flow
import { createTheme } from '@material-ui/core';

import type
{
  Theme,
} from '@material-ui/core';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#0288d1',
      light: '#5eb8ff',
      dark: '#005b9f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#eceff1',
      light: '#ffffff',
      dark: '#babdbe',
      contrastText: '#000000',
    },
    error: {
      main: '#A21C2B',
    },
  },
});


export default theme;