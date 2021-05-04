import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    
    primary: {
      main: '#056399',
    },
    secondary: {
      main: '#ffbd00',
    },
  },
  typography: {   
    fontFamily:'Roboto',
    fontSize: 14,    
  },
  overrides: {
        MuiInputBase: {
            input: {
            color: pink[900],
            },
        },
    }
});

export default theme; 