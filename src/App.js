import './App.css';
import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Service from './Components/Service';

export const GlobalData = createContext();

function App() {
  const [darkTheme, setdarkTheme] = useState(false)

  return (
    <GlobalData.Provider value={{ darkTheme: darkTheme, setdarkTheme: setdarkTheme }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/*" element="404 page not found" />
        </Routes>
      </div>
    </GlobalData.Provider>
  );
}

export default App;
