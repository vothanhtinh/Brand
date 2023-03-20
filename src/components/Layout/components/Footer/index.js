import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './footer.module.scss';
import logo from '~/assets/img/logo.png';
import brand from '~/assets/img/Brand.png';
import US from '~/assets/img/US.png';
import AppStore from '~/assets/img/AppStore.png';
import GoogePlay from '~/assets/img/GooglePlay.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const Footer = () => (
    <>
        <footer className={cx('wrapper')}>
            <Container>
                <div className={cx('inner')}>
                    <Row>
                        <Col lg={3}>
                            <div className={cx('rowItems__left')}>
                                <div className={cx('rowItems__left-image')}>
                                    <div className={cx('rowItems__left-image-logo')}>
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className={cx('rowItems__left-image-brand')}>
                                        <img src={brand} alt="logo" />
                                    </div>
                                </div>
                                <div className={cx('rowItems__left-description')}>
                                    <p>Best information about the company gies here but now lorem ipsum is</p>
                                </div>
                                <div className={cx('rowItems__left-icons')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </div>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </div>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </div>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className={cx('rowItems__right')}>
                                <div className={cx('rowItems__right-link')}>
                                    <h3>About</h3>
                                    <div className={cx('rowItems__right-link-description')}>
                                        <p>About Us</p>
                                        <p>Find store</p>
                                        <p>Find store</p>
                                        <p>Blogs</p>
                                    </div>
                                </div>
                                <div className={cx('rowItems__right-link')}>
                                    <h3>Partnership</h3>
                                    <div className={cx('rowItems__right-link-description')}>
                                        <p>About Us</p>
                                        <p>Find store</p>
                                        <p>Find store</p>
                                        <p>Blogs</p>
                                    </div>
                                </div>
                                <div className={cx('rowItems__right-link')}>
                                    <h3>Information</h3>
                                    <div className={cx('rowItems__right-link-description')}>
                                        <p>Help Center</p>
                                        <p>Find store</p>
                                        <p>Shipping</p>
                                        <p>Contact us</p>
                                    </div>
                                </div>
                                <div className={cx('rowItems__right-link')}>
                                    <h3>For users</h3>
                                    <div className={cx('rowItems__right-link-description')}>
                                        <p>Login</p>
                                        <p>Register</p>
                                        <p>Settings</p>
                                        <p>My Orders</p>
                                    </div>
                                </div>
                                <div className={cx('rowItems__right-link')}>
                                    <h3>Get app</h3>
                                    <div className={cx('rowItems__right-link-image')}>
                                        <img src={AppStore} alt={'AppStore'} />
                                        <img src={GoogePlay} alt={'GooglePlay'} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
        <footer>
            <div className={cx('copyright')}>
                <Container>
                    <div className={cx('copyright__inner')}>
                        <p>© 2023 Ecommerce.</p>
                        <div className={cx('copyright__inner-language')}>
                            <img src={US} alt="language" />
                            <p>
                                EngLish <FontAwesomeIcon icon={faAngleDown} />
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    </>
);

export default Footer;
