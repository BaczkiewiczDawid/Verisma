import "./App.css";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/Global";
import { theme } from "./assets/styles/Theme";
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
