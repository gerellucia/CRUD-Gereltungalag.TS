import { Route } from 'react-router-dom';
import ViewSet from './pages';
import Routes from './Routes';
// import Add from './pages/create';

function App() {
  return (
    <div className="App">
      <Routes/>
      <ViewSet/>
    </div>    
  );
}

export default App;
