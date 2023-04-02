import classNames from 'classnames/bind';
import { Button, Col, Row } from 'react-bootstrap';
import styles from './cartItem.module.scss';
import { useSelector } from 'react-redux';

import { removeFromCart, increaseCart, reduceCart } from '~/redux/actiontype';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function CartItem() {
    const handleIncrease = (event) => {
        return event.target.value + 1;
    };
    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);
    if (!cartItems) return <h2>Không có sản phẩm trong giỏ hàng</h2>;

    return (
        <>
            {cartItems?.map((item, index) => (
                <div className={cx('product__cart')} key={index}>
                    <Row>
                        <Col md={2} style={{ padding: '0px' }}>
                            <div className={cx('product__cart-left')}>
                                <img src={item.thumbnail} alt="test" />
                            </div>
                        </Col>
                        <Col md={8} style={{ padding: '0px' }}>
                            <div className={cx('product__cart-between')}>
                                <div className={cx('title')}>{item.title}</div>
                                <div className={cx('description')}>
                                    <p>
                                        Size: medium, Color: blue, Material: Plastic
                                        <br />
                                        Seller: Artel Market
                                    </p>
                                </div>
                                <div className={cx('group__button')}>
                                    <div className={cx('group__button-remove')}>
                                        <Button onClick={() => dispatch(removeFromCart(item))}> Remove</Button>
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
                                    <p>${item.totalPrice}</p>
                                </div>
                                <div className={cx('quantity')}>
                                    <Button onClick={() => dispatch(reduceCart(item))}>-</Button>

                                    <input type="number" value={item.quantity} onChange={handleIncrease} readOnly />
                                    <Button onClick={() => dispatch(increaseCart(item))}>+</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                </div>
            ))}
        </>
    );
}
export default CartItem;
