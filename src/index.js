import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import { Patrons } from "./components/tickets/Patrons";
import { PatronDetails } from "./components/tickets/PatronDetails";
import { EditPatron } from "./components/tickets/EditPatron";
import { Checkouts } from "./components/tickets/Checkouts";
import { Browse } from "./components/tickets/Browse";
import { CheckOutMaterial } from "./components/tickets/CheckoutMaterial";
import { OverdueCheckouts } from "./components/tickets/OverdueCheckouts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons">
          <Route index element={<Patrons />} />
          <Route path=":id" element={<PatronDetails />} />
          <Route path=":id/edit" element={<EditPatron />} />
        </Route>
        <Route path="checkouts" element={<Checkouts />}></Route>
        <Route path="browse">
          <Route index element={<Browse />}></Route>
          <Route path=":id" element={<CheckOutMaterial />}></Route>
        </Route>
        <Route path="overduecheckouts" element={<OverdueCheckouts />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
