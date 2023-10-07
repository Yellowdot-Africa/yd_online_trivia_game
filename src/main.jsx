import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Context/AuthContext.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />}/>
    </Routes>
    </AuthProvider>
  
    </BrowserRouter> */}
    <App/>
  </React.StrictMode>
);
