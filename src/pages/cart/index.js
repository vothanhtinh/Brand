import classNames from 'classnames/bind';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import styles from './cart.module.scss';
import CartItem from './cartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChartBar, faLock, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import pay1 from '~/assets/img/pay1.png';
import pay2 from '~/assets/img/pay2.png';
import pay3 from '~/assets/img/pay3.png';
import pay4 from '~/assets/img/pay4.png';
import pay5 from '~/assets/img/pay5.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllCart } from '~/actions/actiontype';

const cx = classNames.bind(styles);

function Cart() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleRemoveAll = () => {
        dispatch(removeAllCart());
    };

    const { cartItems } = useSelector((state) => state.cart);
    const calculateTotalPrice = () => {
        let total = 0;
        if (cartItems) {
            cartItems.forEach((item) => {
                total += item.totalPrice;
            });
            return total;
        }
    };

    return (
        <>
            <div className={cx('block__cart')}>
                <Row>
                    <Col md={9} style={{ padding: '0px' }}>
                        <div className={cx('block__cart-item')}>
                            <CartItem />

                            <div className={cx('button__navigation')}>
                                <div className={cx('button__navigation-back')}>
                                    <Button onClick={() => navigate('/')}>
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                        <span>Back to Home</span>
                                    </Button>
                                </div>
                                <div className={cx('button__navigation-remove')}>
                                    <Button onClick={handleRemoveAll}>Remove All</Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('supply__policy')}>
                            <div className={cx('supply__policy-items')}>
                                <div className={cx('supply__policy-item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faLock} />
                                    </div>
                                    <div className={cx('text')}>
                                        <h4>Secure payment</h4>
                                        <p>Have you ever finally just </p>
                                    </div>
                                </div>
                                <div className={cx('supply__policy-item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </div>
                                    <div className={cx('text')}>
                                        <h4>Customer support</h4>
                                        <p>Have you ever finally just </p>
                                    </div>
                                </div>
                                <div className={cx('supply__policy-item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faTruckFast} />
                                    </div>
                                    <div className={cx('text')}>
                                        <h4>Free delivery</h4>
                                        <p>Have you ever finally just </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={cx('block__coupons')}>
                            <h3>Have a coupon?</h3>
                            <InputGroup style={{ height: '40px' }}>
                                <Form.Control
                                    style={{ border: '1px solid #DEE2E7', fontSize: '13px' }}
                                    placeholder="Add Coupons"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button
                                    variant="outline-secondary"
                                    style={{
                                        padding: '10px 20px',
                                        color: '#0D6EFD',
                                        border: '1px solid #DEE2E7',
                                        fontSize: '13px',
                                    }}
                                >
                                    Apply
                                </Button>
                            </InputGroup>
                        </div>
                        <div className={cx('block__pay')}>
                            <div className={cx('block__pay-caculator')}>
                                <div className={cx('subtotal')}>
                                    <div className={cx('key')}>Subtotal:</div>
                                    <div className={cx('value')}>${calculateTotalPrice()}</div>
                                </div>
                                <div className={cx('discount')}>
                                    <div className={cx('key')}>Discount:</div>
                                    <div className={cx('value')}>- $0</div>
                                </div>
                                <div className={cx('tax')}>
                                    <div className={cx('key')}>Tax:</div>
                                    <div className={cx('value')}>+ $0</div>
                                </div>
                                <hr />
                            </div>
                            <div className={cx('block__pay-total')}>
                                <div className={cx('key')}>Total:</div>
                                <div className={cx('value')}>${calculateTotalPrice()}</div>
                            </div>
                            <div className={cx('block__pay-checkout')}>
                                <Button>Check Out</Button>
                            </div>
                            <div className={cx('block__pay-credit')}>
                                <div>
                                    <img src={pay1} alt="pay1" />
                                </div>
                                <div>
                                    <img src={pay2} alt="pay2" />
                                </div>
                                <div>
                                    <img src={pay3} alt="pay3" />
                                </div>
                                <div>
                                    <img src={pay4} alt="pay4" />
                                </div>
                                <div>
                                    <img src={pay5} alt="pay5" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Cart;
