import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Row } from 'react-bootstrap';
import ProductStand from '../productStand';
import styles from './recommentItems.module.scss';

const cx = classNames.bind(styles);

function RecommentItems() {
    const swiperOptions = {
        slidesPerView: 5,
        navigation: true,
        spaceBetween: 20,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            // Thêm các breakpoint khác nếu cần thiết
        },
    };
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const res = async () => {
            const data = await fetch('https://640e10deb07afc3b0dbe4740.mockapi.io/product/groupItem/recommentItem/');
            const json = await data.json();
            setProducts(json);
        };
        res();
    }, []);

    return (
        <div className={cx('block__items')}>
            <div className={cx('block__items-title')}>Recommended items</div>
            <Row>
                <Swiper {...swiperOptions}>
                    <div className={cx('block__items-product')}>
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductStand key={product.id} product={product} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </Row>
            <Row>
                <Swiper {...swiperOptions}>
                    <div className={cx('block__items-product')}>
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductStand key={product.id} product={product} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </Row>
        </div>
    );
}

export default RecommentItems;
