import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Profile from '~/pages/Profile';
//public routes
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/cart', component: Cart },
   { path: '/profile', component: Profile },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
