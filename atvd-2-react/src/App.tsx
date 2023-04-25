import './App.css';
import Home from './pages/home';
import { Provider } from './context/Contexto';
function App() {

  return (
    <Provider>
        <Home/>
    </Provider>
  
  );
}

export default App;
