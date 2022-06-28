import { ThemeProvider } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router-dom';
import { theme } from './service/theme';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="LightTheme" style={{overflowX: 'hidden'}}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/*' element={<Home />} />
        </Routes>
      </ThemeProvider>  
    </div>
  );
}

export default App;
