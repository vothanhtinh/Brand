import Home from '~/pages/Home/home';
import Product from '~/pages/Product';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/product',
        component: Product,
    },
];

//Route can dang nhap
const privateRoutes = [];

export { publicRoutes, privateRoutes };
