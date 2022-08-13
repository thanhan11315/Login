import Login from "../pages/Login/Login.js";
import Register from "../pages/Register/Register.js"; 
import ResetPassword from "../pages/ResetPassword/ResetPassword.js";
import LoginSuccess from "../pages/LoginSucsess/LoginSuccess.js";
import Page1 from "../pages/LoginSucsess/Page1.js";
import Page2 from "../pages/Page2/Page2.js";
import Page3 from "../pages/LoginSucsess/Page3.js";

const publicRoutes = [
    { path: '/', component: Login, layout: null},
    { path: '/register', component: Register, layout: null},
    { path: '/resetPassword', component: ResetPassword, layout: null},
    { path: '/loginSuccess', component: LoginSuccess,},
    { path: '/page1', component: Page1,},
    { path: '/page2', component: Page2,},
    { path: '/page3', component: Page3,},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }

