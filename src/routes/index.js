import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Course from '~/pages/Course';
//public routes
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/cart', component: Cart },
   { path: '/course', component: Course },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
