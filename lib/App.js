import React from 'react';
import { Switch, Route, useRouteMatch, } from 'react-router-dom';
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
function App() {
    const match = useRouteMatch();
    return (React.createElement(ThemeProvider, { theme: PluginTheme },
        React.createElement(Switch, null,
            React.createElement(Route, { path: match.path },
                React.createElement(DefaultRoute, null)))));
}
export default App;
