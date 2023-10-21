import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPageLayout from "./pages/MainPageLayout";

function fakeDelay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

// lazy load routes
const Home = React.lazy(() => {
  return fakeDelay().then(() => import("./pages/home/Home"));
});

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<MainPageLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
