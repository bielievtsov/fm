import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import GuidesPage from "./pages/GuidesPage/GuidesPage";
import PlanPage from "./pages/PlanPage/PlanPage";
import EditPlanPage from "./pages/EditPlanPage/EditPlanPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import FarmPage from "./pages/FarmPage/FarmPage";
import FarmStatistics from "./pages/FarmStatistics/FarmStatistics";
import CreateFarm from "./pages/CreateFarm/CreateFarm";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import LoginForm from "./pages/LogIn/LogIn";

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
      <Route path="/profile/farm/:id" exact>
        <FarmPage></FarmPage>
      </Route>
      <Route path="/profile/farm/:id/stats" exact>
        <FarmStatistics></FarmStatistics>
      </Route>
      <Route path="/farm/create/" exact>
        <CreateFarm></CreateFarm>
      </Route>
      <Route path="/product/create/" exact>
        <CreateProduct></CreateProduct>
      </Route>
      <Route path="/login" exact>
        <LoginForm></LoginForm>
      </Route>
    </div>
  );
}

export default App;
