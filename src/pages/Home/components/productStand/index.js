import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './productStand.module.scss';

const cx = classNames.bind(styles);

function ProductStand({ product }) {
    return (
        <>
            <div className={cx('product__stand')}>
                <Link to={`/product/${product.id}`}>
                    <div className={cx('product__stand-image')}>
                        <img src={product.thumbnail} alt={product.title} />
                    </div>
                </Link>

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
