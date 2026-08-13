import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import { RegisteCustomer } from "./pages/registerCustomer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisteCustomer />} />
      </Routes>
    </BrowserRouter>
  );
};
