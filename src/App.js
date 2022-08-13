import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index.js";
import React from "react";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";


const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout === null ? Fragment : DefaultLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
