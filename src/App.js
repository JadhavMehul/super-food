import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Cart from "./Screens/Cart";
import HomeScreen from "./Screens/HomeScreen";
import MenuScreen from "./Screens/MenuScreen";

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
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
