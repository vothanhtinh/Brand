import classNames from 'classnames/bind';
import { Col } from 'react-bootstrap';
import styles from './productVaertical.module.scss';

const cx = classNames.bind(styles);

const ProductVaertical = (props) => {
    return (
        <>
            <Col lg={3} style={{ padding: '0px' }}>
                <div className={cx('productVaertical')}>
                    <div className={cx('productVaertical__text')}>
                        <h2>{props.product.title}</h2>
                        <p>
                            FROM <br />
                            USD {props.product.price}
                        </p>
                    </div>
                    <div className={cx('productVaertical__image')}>
                        <img src={props.product.image} alt={props.product.title} />
                    </div>
                </div>
            </Col>
        </>
    );
};
export default ProductVaertical;
