import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PluginTheme from './Theme';
import DefaultRoute from './DefaultRoute';

// if you are not using react router
// dont forget to remove the react-router-dom import!
/*
function App(): JSX.Element {
  return (
    <ThemeProvider theme={PluginTheme}>
      <DefaultRoute />
    </ThemeProvider>
  );
}
*/

function App() : JSX.Element{
  const match = useRouteMatch();
  return (
    <ThemeProvider theme={PluginTheme}>
      <Switch>
        <Route path={match.path}>
          <DefaultRoute />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
