import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Cart from "./Screens/Cart";
import HomeScreen from "./Screens/HomeScreen";
import MenuScreen from "./Screens/MenuScreen";
import Success from "./Screens/Success";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/menu" element={<MenuScreen />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
