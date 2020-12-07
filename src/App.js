import React from 'react';
import Header from "./components/Header";
import "./styled.css";
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
