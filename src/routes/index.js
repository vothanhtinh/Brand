import Home from '~/pages/Home/home';
import ProductDetail from '~/pages/productDetail';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },

    {
        path: '/product/:productId',
        component: ProductDetail,
    },
];

//Route can dang nhap
const privateRoutes = [];

export { publicRoutes, privateRoutes };
