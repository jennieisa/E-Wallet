import {Routes, Route, Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


import './App.css';
import CardsPage from './pages/CardsPage';
import AddCardPage from './pages/AddCardPage';
import {getUser} from './components/UserInfo/userInfoSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUser());
  })

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
