import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
//public routes
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/cart', component: Cart },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
