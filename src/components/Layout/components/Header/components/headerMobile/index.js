import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import logo from '~/assets/img/logo.png';
import avatar from '~/assets/img/avatar.png';

import classNames from 'classnames/bind';
import styles from './headerMobile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSearch } from 'react-icons/fa';
import {
    faBasketShopping,
    faBuildingLock,
    faCartShopping,
    faGlobe,
    faHeadset,
    faHeart,
    faHouse,
    faList,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FormControl, InputGroup } from 'react-bootstrap';
import SlideText from './slideText';

const cx = classNames.bind(styles);

function HeaderMobile() {
    return (
        <>
            <Navbar expand={'sm'} style={{ height: '', background: '#ffffff' }}>
                <Container fluid style={{ padding: '10px' }}>
                    <Navbar.Toggle style={{ fontSize: '16px' }} aria-controls={`offcanvasNavbar-expand-md`} />
                    <Link to="/">
                        <div className={cx('logo')}>
                            <img src={logo} alt="logo" />
                            <h2 className={cx('text-logo')}>Brand</h2>
                        </div>
                    </Link>
                    <div className={cx('group-icon')}>
                        <div className={cx('icon-items')}>
                            <Link to="/cart">
                                <FontAwesomeIcon className={cx('icon-item')} icon={faCartShopping} />
                            </Link>
                        </div>
                        <div className={cx('icon-items')}>
                            <FontAwesomeIcon className={cx('icon-item')} icon={faUser} />
                        </div>
                    </div>

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="start"
                        style={{ maxWidth: '300px' }}
                    >
                        <Offcanvas.Header closeButton style={{ background: ' #eff2f4' }}>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                <div className={cx('user__info')}>
                                    <img src={avatar} alt="avatar" />
                                    <div className={cx('user__info-singin')}>
                                        <p>Sing In</p>
                                        <p>|</p>
                                        <p>Register</p>
                                    </div>
                                </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className={cx('nav__items')}>
                                <div className={cx('item')}>
                                    <p className={cx('item-icon')}>
                                        <FontAwesomeIcon icon={faHouse} />
                                    </p>
                                    <p className={cx('item-text')}>Home</p>
                                </div>
                                <div className={cx('item')}>
                                    <p className={cx('item-icon')}>
                                        <FontAwesomeIcon icon={faList} />
                                    </p>
                                    <p className={cx('item-text')}>Categories</p>
                                </div>
                                <div className={cx('item')}>
                                    <p className={cx('item-icon')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </p>
                                    <p className={cx('item-text')}>Favorites</p>
                                </div>
                                <div className={cx('item')}>
                                    <p className={cx('item-icon')}>
                                        <FontAwesomeIcon icon={faBasketShopping} />
                                    </p>
                                    <p className={cx('item-text')}>My orders</p>
                                </div>
                                <hr />
                            </div>
                            <div className={cx('nav__items')}>
                                <div className={cx('item')}>
                                    <p className={cx('item-icon')}>
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </p>
                                    <p className={cx('item-text')}>English | USD</p>
                                </div>
                                <div className={cx('item')}>
                                    <p className={cx('item-icon')}>
                                        <FontAwesomeIcon icon={faHeadset} />
                                    </p>
                                    <p className={cx('item-text')}>Contact us</p>
                                </div>
                                <div className={cx('item')}>
                                    <p className={cx('item-icon')}>
                                        <FontAwesomeIcon icon={faBuildingLock} />
                                    </p>
                                    <p className={cx('item-text')}>About</p>
                                </div>
                                <hr />
                            </div>
                            <div className={cx('nav__items')}>
                                <div className={cx('item')}>
                                    <p className={cx('item-icon')}></p>
                                    <p className={cx('item-text')}>User agreement</p>
                                </div>
                                <div className={cx('item')}>
                                    <p className={cx('item-icon')}></p>
                                    <p className={cx('item-text')}>Partnership</p>
                                </div>
                                <div className={cx('item')}>
                                    <p className={cx('item-icon')}></p>
                                    <p className={cx('item-text')}>Privacy policy</p>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                <Container>
                    <div className={cx('group__input')}>
                        <InputGroup
                            style={{
                                border: '1px solid #DEE2E7',
                                height: '40px',
                                borderRadius: '6px',
                            }}
                        >
                            <InputGroup.Text
                                style={{
                                    border: 'none',
                                    background: '#f7fafc',
                                    fontSize: '16px',
                                    color: '#8B96A5',
                                    paddingLeft: '10px',
                                }}
                            >
                                <FaSearch />
                            </InputGroup.Text>
                            <FormControl
                                style={{ border: 'none', background: '#f7fafc', fontSize: '16px', color: '#8B96A5' }}
                                placeholder="Search..."
                            />
                        </InputGroup>
                    </div>
                </Container>

                <SlideText />
            </Navbar>
        </>
    );
}

export default HeaderMobile;
