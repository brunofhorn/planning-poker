import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router-dom';
import { theme } from './service/theme';
import Home from './pages/Home';
import { Game } from "./pages/Game";
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="LightTheme" style={{ overflowX: 'hidden' }}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Toolbar />
          <Routes>
            <Route path='/game/:id' element={<Game />} />
            <Route path='/join/:id' element={<Home />} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
