import classNames from 'classnames/bind';
import { Button, Col, Row } from 'react-bootstrap';
import styles from './cartItem.module.scss';
import image23 from '~/assets/img/image23.png';

const cx = classNames.bind(styles);

function CartItem() {
    return (
        <>
            <div className={cx('product__cart')}>
                <Row>
                    <Col md={2} style={{ padding: '0px' }}>
                        <div className={cx('product__cart-left')}>
                            <img src={image23} alt="test" />
                        </div>
                    </Col>
                    <Col md={8} style={{ padding: '0px' }}>
                        <div className={cx('product__cart-between')}>
                            <div className={cx('title')}>T-shirts with multiple colors, for men and lady</div>
                            <div className={cx('description')}>
                                <p>
                                    Size: medium, Color: blue, Material: Plastic
                                    <br />
                                    Seller: Artel Market
                                </p>
                            </div>
                            <div className={cx('group__button')}>
                                <div className={cx('group__button-remove')}>
                                    <Button> Remove</Button>
                                </div>
                                <div className={cx('group__button-save')}>
                                    <Button>Save for later</Button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={2} style={{ padding: '0px' }}>
                        <div className={cx('product__cart-right')}>
                            <div className={cx('price')}>
                                <p>$78.99</p>
                            </div>
                            <div className={cx('quantity')}>
                                <Button>-</Button>
                                <input type="number" defaultValue={1} />
                                <Button>+</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
            </div>
        </>
    );
}
export default CartItem;
