import { Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './productStand.module.scss';

const cx = classNames.bind(styles);

function ProductStand({ product }) {
    return (
        <>
            <div className={cx('product__stand')}>
                <div className={cx('product__stand-image')}>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className={cx('product__stand-price')}>
                    <h4> ${product.price}</h4>
                </div>
                <div className={cx('product__stand-description')}>
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    );
}
export default ProductStand;
