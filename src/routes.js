import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from './containers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    primary: colors.teal,
    secondary: colors.orange
  },
  status: {
    danger: colors.red,
  },
});


const Routes = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={App}/>
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default Routes;