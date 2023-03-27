import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './productSales.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ProductSales = () => {
    const swiperOptions = {
        slidesPerView: 5,
        navigation: true,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            // Thêm các breakpoint khác nếu cần thiết
            320: {
                slidesPerView: 2,
            },
            390: {
                slidesPerView: 3,
            },
            600: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },
        },
    };
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const res = async () => {
            const data = await fetch('https://dummyjson.com/products');
            const json = await data.json();
            setProducts(json.products);
        };
        res();
    }, []);
    return (
        <>
            <Swiper {...swiperOptions}>
                {products.splice(0, 8).map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className={cx('product')}>
                            <Link to={`/product/${product.id}`}>
                                <div className={cx('product__image')}>
                                    <img src={product.thumbnail} alt={product.title} />
                                </div>
                                <h3>{product.title}</h3>
                            </Link>

                            <p>-{product.discountPercentage}%</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ProductSales;
