import Login from "../pages/Login/Login.js";
import Register from "../pages/Register/Register.js";
import ResetPassword from "../pages/ResetPassword/ResetPassword.js";
import Page2 from "../pages/Page2/Page2.js";
import LoginSuccess from "../pages/LoginSucess/LoginSuccess.js";
import OrderManagement from "../pages/OrderManegement/OrderManagement.js";

const publicRoutes = [
  { path: "/", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/resetPassword", component: ResetPassword, layout: null },
  { path: "/page2", component: Page2 },
  { path: "/loginSuccess", component: LoginSuccess },
  { path: "/orderManagement", component: OrderManagement },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
