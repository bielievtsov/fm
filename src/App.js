import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import GuidesPage from "./pages/GuidesPage/GuidesPage";
import PlanPage from "./pages/PlanPage/PlanPage";
import EditPlanPage from "./pages/EditPlanPage/EditPlanPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route path="/" exact>
        <HomePage></HomePage>
      </Route>
      <Route path="/guides">
        <GuidesPage></GuidesPage>
      </Route>
      <Route path="/plan/:id">
        <PlanPage></PlanPage>
      </Route>
      <Route path="/plan/edit/:id" exact>
        <EditPlanPage></EditPlanPage>
      </Route>
      <Route path="/profile/" exact>
        <ProfilePage></ProfilePage>
      </Route>
    </div>
  );
}

export default App;
