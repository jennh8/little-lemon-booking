import './App.css';
import { useReducer } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Booking from './Booking';
import { initializeTimes, updateTimes } from "./Times";

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
