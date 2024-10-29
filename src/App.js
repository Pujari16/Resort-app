import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom'; // Change to HashRouter
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer/Footer';
import RoomPage from './Pages/RoomPage';

const App = () => {
  useEffect(() => {
    document.title = 'Mount Edge';
  }, []);

  return (
    <div className='App'>
      <HashRouter> {/* Use HashRouter instead of BrowserRouter */}
        <Navbar />
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/Home' element={<HomePage />} />
            <Route path='/About' element={<AboutUs />} />
            <Route path='/Contact' element={<ContactUs />} />
            <Route path='/Room' element={<RoomPage />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;