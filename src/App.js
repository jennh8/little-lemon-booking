import './App.css';
import { useReducer } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Booking from './Booking';

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// In the real assignment, this usually uses a provided API like fetchAPI(date)
function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // later you'd use action.date to fetch new times
      return initializeTimes();
    default:
      return state;
  }
}

function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={
          <Booking
            availableTimes={availableTimes}
            dispatch={dispatch} />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
