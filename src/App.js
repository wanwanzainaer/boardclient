import React, { useEffect } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import NavigationBar from './components/Header';
import { Switch, Route } from 'react-router-dom';
import setAuthToekn from './utils/setAuthToken';
import { checkAuthStart } from './redux/actions/userAction';
import { connect } from 'react-redux';
import Login from './components/login/Login';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

if (localStorage.token) {
  setAuthToekn(localStorage.token);
}
const mainTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#e2edf2',
      main: '#83b1c9',
      dark: '#36657d'
    },
    secondary: {
      main: '#c7d6db'
    },
    text: {
      primary: '#223f4e',
      secondary: '#36657d'
    }
  }
});
// const mainTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#5d61a2'
//     },
//     secondary: {
//       main: '#93cdd1'
//     },
//     text: {
//       primary: '#ebebe3',
//       secondary: '#C6d2be'
//     }
//   }
// });
const App = props => {
  const { checkAuthStart } = props;
  useEffect(() => {
    checkAuthStart();
  }, [checkAuthStart]);
  return (
    <ThemeProvider theme={mainTheme}>
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/test" component={() => <div>Test</div>} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default connect(null, { checkAuthStart })(App);
