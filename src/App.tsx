import { BrowserRouter, Route, Routes } from "react-router-dom";

import View from "./layouts/View";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />}>
          <Route index element={<HomePage />} />
          <Route path="/products/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
