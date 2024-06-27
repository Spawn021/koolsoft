import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Course from '~/pages/Course';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import SendEmail from '~/pages/ForgotPassword/components/SendEmail';
import ResetPassword from '~/pages/ForgotPassword/components/ResetPassword';
import OTP from '~/pages/ForgotPassword/components/OTP';
import Done from '~/pages/ForgotPassword/components/Done';

//public routes
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/cart', component: Cart },
   { path: '/course', component: Course },
];
const privateRoutes = [
   { path: '/login', component: Login, layout: null },
   { path: '/signup', component: Signup, layout: null },
   { path: '/forgot-password/send-email', component: SendEmail, layout: null },
   { path: '/forgot-password/reset-password', component: ResetPassword, layout: null },
   { path: '/forgot-password/otp', component: OTP, layout: null },
   { path: '/forgot-password/done', component: Done, layout: null },
];

export { publicRoutes, privateRoutes };
