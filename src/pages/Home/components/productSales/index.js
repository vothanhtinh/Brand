import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './productSales.module.scss';
import classNames from 'classnames/bind';
import image34 from '~/assets/img/image34.png';
import image35 from '~/assets/img/image35.png';
import image23 from '~/assets/img/image23.png';
import image28 from '~/assets/img/image28.png';
import image29 from '~/assets/img/image29.png';

const cx = classNames.bind(styles);

const productList = [
    {
        id: 1,
        name: 'Smart watches',
        imageUrl: image35,
        discount: 25,
    },
    {
        id: 2,
        name: 'Laptops',
        imageUrl: image34,
        discount: 15,
    },
    {
        id: 3,
        name: 'GoPro cameras',
        imageUrl: image28,
        discount: 40,
    },
    {
        id: 4,
        name: 'Headphones',
        imageUrl: image29,
        discount: 25,
    },
    {
        id: 5,
        name: 'Canon camreras',
        imageUrl: image23,
        discount: 25,
    },
    {
        id: 6,
        name: 'Canon camreras',
        imageUrl: image23,
        discount: 25,
    },
];

const ProductSales = () => {
    const swiperOptions = {
        slidesPerView: 5,
        navigation: true,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            // Thêm các breakpoint khác nếu cần thiết
        },
    };
    return (
        <Swiper {...swiperOptions} style={{ marginLeft: '30px' }}>
            {productList.map((product) => (
                <SwiperSlide key={product.id}>
                    <div className={cx('product')}>
                        <div className={cx('product__image')}>
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <h3>{product.name}</h3>
                        <p>-{product.discount}%</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductSales;
