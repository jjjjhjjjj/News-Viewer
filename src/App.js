import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import NewsTemplate from "./components/NewsTemplate";

function App() {
  return <Route path="/:category?" component={NewsTemplate} />;
}

export default App;
