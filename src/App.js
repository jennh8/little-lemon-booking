import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Booking from './Booking';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
