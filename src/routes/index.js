import Cart from '~/pages/cart';
import Home from '~/pages/Home/home';
import Login from '~/pages/login/Login';
import ProductDetail from '~/pages/productDetail';
import Register from '~/pages/register/Register';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },

    {
        path: '/product/:productId',
        component: ProductDetail,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
];

//Route can dang nhap
const privateRoutes = [];

export { publicRoutes, privateRoutes };
