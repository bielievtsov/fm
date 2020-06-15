import React, { useState } from "react";
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
import RegistrationForm from "./pages/ RegistrationPage/RegistrationPage";
import CreateGuide from "./pages/CreateGuide/CreateGuide";
import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  en: {
    welcome: "WELCOME TO FISH FARM",
    productName: "Product name",
    productDescription: "product's description",
    productQuantity: "Quantity of the product",
    Quantity: "Quantity",
    productPrice: "Price of the product",
    productDate: "Date of product's creation",
    Delete: "Delete",
    creteNewProduct: "Create new product",
    statistics: "Statistics",
    farmDate: "Date of farm creation",
    Description: "Description",
    Name: "Name",
    userName: "Name",
    userPhone: "Phone number",
    email: "Email",
    createFarm: "Create farm",
    farmName: "Farm name",
    createPlan: "Create plan",
    planName: "Plan name",
    planDesc: "Plan's description",
    user: "User",
    Password: "Password",
    LogIn: "Log in",
    Max: "Max",
    Min: "Min",
    Variance: "Variance",
    Mean: "Mean",
    submitEdit: "Edit",
    Price: "Price",
    submit: "Submit",
    farmDesc: "Farm description",
    sname: "Second name",
    cPassword: "confirm password",
    signUpp: "Sign Up",
    signUp: "Sign Up",
    hPage: "Home Page",
    clang: "Uk",
    LogOut: "Log out",
    profile: "Profile",
    guides: "Guides",
  },
  ua: {
    welcome: "ЛАСКАВО ПРОСИМО ДО FISH FARM",
    productName: "Назва продукта",
    productDescription: "Опис продукта",
    productQuantity: "Кількість продукта",
    productPrice: "Ціна продукта",
    productDate: "Дата створення продукта",
    Delete: "Видалити",
    creteNewProduct: "Створити новий продукт",
    statistics: "Статистика",
    farmDate: "Дата створення ферми",
    Description: "Опис",
    Name: "Назва",
    userName: "Ім'я",
    userPhone: "Телефон",
    email: "Пошта",
    createFarm: "Створити ферму",
    farmName: "Назва ферми",
    createPlan: "Створити план",
    planName: "Назва плану",
    planDesc: "Опис плану",
    user: "Користувач",
    Password: "Пароль",
    LogIn: "Увійти",
    Max: "Максимум",
    Min: "Мінімум",
    Variance: "Дисперсія",
    Mean: "Середнє",
    submitEdit: "Редагувати",
    Quantity: "Кількість",
    Price: "Ціна",
    submit: "Підтвердити",
    farmDesc: "Опис ферми",
    sname: "По батькові",
    cPassword: "Підтвердження паролю",
    signUpp: "Реєстрація",
    signUp: "Зареєструватися",
    hPage: "Домашня сторінка",
    clang: "Eng",
    LogOut: "Вийти",
    profile: "Профіль",
    guides: "Гайди",
  },
});

function App() {
  const [lang, setLang] = useState("en");

  strings.setLanguage(lang);

  const changeLang = () => {
    setLang(lang === "en" ? "ua" : "en");
    strings.setLanguage(lang);
  };

  return (
    <div>
      <Header changeLang={changeLang} strings={strings}></Header>
      <Route path="/" exact>
        <HomePage strings={strings}></HomePage>
      </Route>
      <Route path="/guides">
        <GuidesPage strings={strings}></GuidesPage>
      </Route>
      <Route path="/plan/:id">
        <PlanPage strings={strings}></PlanPage>
      </Route>
      <Route path="/plan/edit/:id" exact>
        <EditPlanPage strings={strings}></EditPlanPage>
      </Route>
      <Route path="/profile/" exact>
        <ProfilePage strings={strings}></ProfilePage>
      </Route>
      <Route path="/profile/farm/:id" exact>
        <FarmPage strings={strings}></FarmPage>
      </Route>
      <Route path="/profile/farm/:id/stats" exact>
        <FarmStatistics strings={strings}></FarmStatistics>
      </Route>
      <Route path="/farm/create/" exact>
        <CreateFarm strings={strings}></CreateFarm>
      </Route>
      <Route path="/product/create/" exact>
        <CreateProduct strings={strings}></CreateProduct>
      </Route>
      <Route path="/login" exact>
        <LoginForm strings={strings}></LoginForm>
      </Route>
      <Route path="/registration" exact>
        <RegistrationForm strings={strings}></RegistrationForm>
      </Route>
      <Route path="/plan_create" exact>
        <CreateGuide strings={strings}></CreateGuide>
      </Route>
    </div>
  );
}

export default App;
