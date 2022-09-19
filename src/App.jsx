import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UseEffectApp from "./components/UI/use-effect/useEffectApp";
import UseJsonFetchApp from "./components/UI/use-fetch/useJsonFetchApp";
import { ROUTER_PATH } from "./helpers/path";
import MainLayout from "./layouts/main";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route
          path={ROUTER_PATH.base}
          element={<Navigate replace to={ROUTER_PATH.useEffect} />}
        />
        <Route path={ROUTER_PATH.useEffect} element={<UseEffectApp />} />
        <Route path={ROUTER_PATH.jsonFetch} element={<UseJsonFetchApp />} />
      </Route>
    </Routes>
  );
}

export default App;
