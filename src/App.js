import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import './App.css';
import Auth from "./routes/Auth";
import Home from "./routes/Home";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Auth} />
          <Route path="/home" component={Home} />
        </div>
      </BrowserRouter>
  );
}

export default App;
