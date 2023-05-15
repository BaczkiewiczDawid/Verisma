import "./App.css";
import Home from './pages/Home/Home';
import { GlobalStyle } from "./assets/styles/Global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
