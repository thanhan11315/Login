import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"; 
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import LoginSuccess from "../pages/LoginSucsess/LoginSuccess";
import Page1 from "../pages/LoginSucsess/Page1";
import Page2 from "../pages/Page2/Page2";
import Page3 from "../pages/LoginSucsess/Page3";

const publicRoutes = [
    { path: '/', component: Login, layout: null},
    { path: '/Register', component: Register, layout: null},
    { path: '/ResetPassword', component: ResetPassword, layout: null},
    { path: '/LoginSuccess', component: LoginSuccess,},
    { path: '/Page1', component: Page1,},
    { path: '/Page2', component: Page2,},
    { path: '/Page3', component: Page3,},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }

