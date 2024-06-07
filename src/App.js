import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import Dashboard from './components/Dashboard';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard toggleTheme={toggleTheme} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
