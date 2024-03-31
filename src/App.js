import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className='App__wrapper'>
        <Route component={Main} />
      </div>
    </Router>
  );
}

export default App;

