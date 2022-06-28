import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { theme } from './service/theme';

function App() {
  return (
    <div className="LightTheme" style={{overflowX: 'hidden'}}>
      <ThemeProvider theme={theme}>
      <div>Teste</div>
      </ThemeProvider>
    </div>
  );
}

export default App;
