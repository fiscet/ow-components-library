import { createMuiTheme } from '@material-ui/core/styles'; // Global style variables

export var color = {
  // Palette
  owRed: '#CC0033',
  owAvio: '#367FA9',
  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#B8C7CE',
  light: '#F1F3F4',
  mediumlight: '#E3E5E6',
  medium: '#DDDDDD',
  mediumdark: '#919699',
  dark: '#222D32',
  darker: '#4D4D4D',
  darkest: '#333333',
  border: 'rgba(0,0,0,.1)',
  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#F3AA18',
  success: '#2FA84F'
};
export var owGlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: color.owRed
    },
    secondary: {
      main: color.mediumlight
    },
    success: {
      main: color.success
    },
    warning: {
      main: color.warning
    }
  },
  typography: {
    fontFamily: 'Muli, Roboto, Arial',
    h1: {
      fontSize: '96px',
      lineHeight: '120px'
    },
    h2: {
      fontSize: '60px',
      lineHeight: '75px'
    },
    h3: {
      fontSize: '48px',
      lineHeight: '60px'
    },
    h4: {
      fontSize: '34px',
      lineHeight: '43px'
    },
    h5: {
      fontSize: '24px',
      lineHeight: '30px'
    },
    h6: {
      fontSize: '20px',
      lineHeight: '28px'
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '22px'
    },
    body1: {
      fontSize: '14px',
      lineHeight: '20px'
    },
    body2: {
      fontSize: '16px',
      lineHeight: '24px'
    },
    caption: {
      fontSize: '12px',
      lineHeight: '16px'
    },
    button: {
      fontSize: '14px',
      lineHeight: '18px'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {}
    }
  }
});
export var owButtonSecondaryTheme = createMuiTheme({
  palette: {
    primary: {
      main: color.darker
    }
  }
});
export var owButtonWarningTheme = createMuiTheme({
  palette: {
    primary: {
      main: color.owRed
    }
  }
});
export var owDefHeaderTheme = createMuiTheme({
  palette: {
    primary: {
      main: color.lightest
    }
  }
});
export var owDefMainNavTheme = createMuiTheme({
  palette: {
    primary: {
      main: color.light
    }
  }
});
export var owContractSelectorTheme = createMuiTheme({
  palette: {
    primary: {
      main: color.darker
    },
    text: {
      primary: {
        main: color.darker
      }
    }
  }
});