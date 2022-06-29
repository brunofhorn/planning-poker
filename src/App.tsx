import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router-dom';
import { theme } from './service/theme';
import Home from './pages/Home';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="LightTheme" style={{ overflowX: 'hidden' }}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Toolbar />
          <Routes>
            <Route path='/*' element={<Home />} />
          </Routes>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
