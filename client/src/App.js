import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Logiin";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Route exact path="/" component={Login} /> */}
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </BrowserRouter>
    </div>
  );
};

export default App;
