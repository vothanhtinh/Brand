import classNames from 'classnames/bind';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './productVaertical.module.scss';

const cx = classNames.bind(styles);

const ProductVaertical = ({ product }) => {
    return (
        <>
            <Col lg={3} style={{ padding: '0px' }}>
                <div className={cx('productVaertical')}>
                    <div className={cx('productVaertical__text')}>
                        <h2>
                            <Link to={`/product/${product.id}`}>{product.title}</Link>
                        </h2>
                        <p>
                            FROM <br />
                            USD {product.price}
                        </p>
                    </div>
                    <div className={cx('productVaertical__image')}>
                        <img src={product.thumbnail} alt={product.title} />
                    </div>
                </div>
            </Col>
        </>
    );
};
export default ProductVaertical;
