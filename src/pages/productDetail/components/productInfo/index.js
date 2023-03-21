import classNames from 'classnames/bind';
import { useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import TextRating from '../textRating';
import styles from './productInfo.module.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBasketShopping, faShieldHalved, faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons';
import US from '~/assets/img/US.png';

const cx = classNames.bind(styles);
function ProductInfo({ product }) {
    const imgRef = useRef(null);

    return (
        <>
            <Row style={{ border: '1px solid #DEE2E7', background: '#ffffff', borderRadius: '6px' }}>
                <Col lg={4} style={{ borderRadius: '6px' }}>
                    <div className={cx('product__image')}>
                        <img src={product.thumbnail} ref={imgRef} alt={product.title} />
                        <div className={cx('product__image-thumb')}>
                            {product.images.map((image, key) => (
                                <div key={key}>
                                    <img
                                        src={image}
                                        onClick={() => {
                                            imgRef.current.src = image;
                                        }}
                                        alt="2"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className={cx('product__content')}>
                        <div className={cx('in__stock')}>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>In Stock</p>
                        </div>
                        <div className={cx('product__content-title')}>
                            <h3>{product.description}</h3>
                        </div>
                        <div className={cx('product__content-evaluate')}>
                            <div className={cx('rating')}>
                                <TextRating rating={product.rating} />
                            </div>
                            <div className={cx('comment')}>
                                <FontAwesomeIcon icon={faChartBar} />
                                <p>32 reviews</p>
                            </div>
                            <div className={cx('sold')}>
                                <FontAwesomeIcon icon={faBasketShopping} />
                                <p>154 sold </p>
                            </div>
                        </div>
                        <div className={cx('product__content-detail')}>
                            <div className={cx('items')}>
                                <p className={cx('key')}>Price:</p>
                                <p
                                    className={cx('value')}
                                    style={{ color: '#FA3434', fontSize: '18px', fontWeight: '600' }}
                                >
                                    $ {product.price}{' '}
                                </p>
                            </div>
                        </div>
                        <div className={cx('product__content-detail')}>
                            <div className={cx('items')}>
                                <p className={cx('key')}>Type: </p>
                                <p className={cx('value')}>Classic shoes</p>
                            </div>
                            <div className={cx('items')}>
                                <p className={cx('key')}>Material: </p>
                                <p className={cx('value')}>Plastic material</p>
                            </div>
                            <div className={cx('items')}>
                                <p className={cx('key')}>Design: </p>
                                <p className={cx('value')}>Modern nice</p>
                            </div>
                        </div>
                        <div className={cx('product__content-detail')}>
                            <div className={cx('items')}>
                                <p className={cx('key')}>Customization: </p>
                                <p className={cx('value')}>Customized logo and design custom packages</p>
                            </div>
                            <div className={cx('items')}>
                                <p className={cx('key')}>Protection:</p>
                                <p className={cx('value')}>Refund Policy</p>
                            </div>
                            <div className={cx('items')}>
                                <p className={cx('key')}>Warranty: </p>
                                <p className={cx('value')}>2 years full warranty </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={cx('supplier')}>
                        <div className={cx('supplier__title')}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div className={cx('supplier__title-name')}>
                                <h3>Supplier</h3>
                                <h3>{product.brand}</h3>
                            </div>
                        </div>
                        <div className={cx('supplier__info')}>
                            <div className={cx('supplier__info-item')}>
                                <img src={US} alt="country" />
                                <p>Germany, Berlin</p>
                            </div>
                            <div className={cx('supplier__info-item')}>
                                <FontAwesomeIcon icon={faShieldHalved} />
                                <p>Verified Seller</p>
                            </div>
                            <div className={cx('supplier__info-item')}>
                                <FontAwesomeIcon icon={faGlobe} />
                                <p>Worldwide shipping</p>
                            </div>
                        </div>
                        <div className={cx('supplier__button')}>
                            <div className={cx('supplier__button-inquiry')}>
                                <Button> Send inquiry</Button>
                            </div>
                            <div className={cx('supplier__button-profile')}>
                                <Button> Seller's profile</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('save__later')}>
                        <Button>
                            <FontAwesomeIcon icon={faHeart} />
                            <span>Save for later</span>
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}
export default ProductInfo;
