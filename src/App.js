import './App.css';
import React, { createContext, useState } from 'react'
import Header from './Components/Header';
import Main from './Components/Main';

export const GlobalData= createContext();

function App() {
  const [darkTheme, setdarkTheme] = useState(false)

  return (
    <GlobalData.Provider value={{darkTheme:darkTheme ,setdarkTheme:setdarkTheme }}>
    <div className="App">
     <Header/>
     <Main/>
    </div>
    </GlobalData.Provider>
  );
}

export default App;
