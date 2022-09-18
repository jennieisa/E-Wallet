import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';
import CardsPage from './pages/CardsPage';
import AddCardPage from './pages/AddCardPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/cards" />} />
        <Route path='/cards' element={<CardsPage />} />
        <Route path='/addcard' element={<AddCardPage />} />
      </Routes>
    </div>
  );
}

export default App;
