import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductStand from '~/pages/Home/components/productStand';
import classNames from 'classnames/bind';
import styles from './slideProduct.module.scss';

const cx = classNames.bind(styles);
function SlideProduct({ enpoint }) {
    const swiperOptions = {
        slidesPerView: 5,
        navigation: true,
        spaceBetween: 20,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            390: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            600: {
                spaceBetween: 10,
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            },
            // Thêm các breakpoint khác nếu cần thiết
        },
    };
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const res = async () => {
            const data = await fetch(`https://dummyjson.com/products/category/${enpoint}`);
            const json = await data.json();
            setProducts(json.products);
        };
        res();
    }, [enpoint]);
    return (
        <>
            <Swiper {...swiperOptions}>
                <div className={cx('block__items-product')}>
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductStand key={product.id} product={product} />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </>
    );
}
export default SlideProduct;
