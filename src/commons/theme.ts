import {
  createMuiTheme,
} from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#29c6da"
    },
    secondary: {
      main: "#dc004e"
    },
    error: {
      main: "#f44336"
    },
    warning: {
      main: "#ff8900"
    },
    info: {
      main: "#2196f3"
    },
    success: {
      main: "#4caf50"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.65)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    }
  },
})

export const secondTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#dc004e"
    },
    error: {
      main: "#f44336"
    },
    warning: {
      main: "#ff8900"
    },
    info: {
      main: "#2196f3"
    },
    success: {
      main: "#4caf50"
    }
  }
})
