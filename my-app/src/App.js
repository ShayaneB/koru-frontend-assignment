import React from "react";
import "./App.css";
import logo from "./images/koru-logo.png";
import useModal from "./Modal/useModal";
import Modal from "./Modal/Modal";

function App() {
  const { isShowing, toggle } = useModal();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn" onClick={toggle}>
          Click Me
        </button>
        <Modal isShowing={isShowing} hide={toggle} />
      </header>
    </div>
  );
}

export default App;
