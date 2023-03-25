import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMessage, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Container, Form } from 'react-bootstrap';
import logo from '~/assets/img/logo.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <header className={cx('wrapper')}>
            <Container>
                <div className={cx('inner')}>
                    <Link to="/">
                        <div className={cx('logo')}>
                            <img src={logo} alt="logo" />
                            <h2 className={cx('text-logo')}>Brand</h2>
                        </div>
                    </Link>
                    <div className={cx('search')}>
                        <input placeholder="Search" spellCheck={false} />
                        <Form.Select
                            size="lg"
                            style={{ width: '140px', borderRadius: '0px', border: '1px solid #0D6EFD' }}
                        >
                            <option>All Category</option>
                        </Form.Select>
                        <button className={cx('search-btn')}>Search</button>
                    </div>
                    <div className={cx('group-icon')}>
                        <div className={cx('icon-items')}>
                            <FontAwesomeIcon className={cx('icon-item')} icon={faUser} />
                            <p>ProFile</p>
                        </div>

                        <div className={cx('icon-items')}>
                            <FontAwesomeIcon className={cx('icon-item')} icon={faMessage} />
                            <p>Message</p>
                        </div>
                        <div className={cx('icon-items')}>
                            <FontAwesomeIcon className={cx('icon-item')} icon={faHeart} />
                            <p>Orders</p>
                        </div>
                        <div className={cx('icon-items')}>
                            <FontAwesomeIcon className={cx('icon-item')} icon={faCartShopping} />
                            <Link to="/cart">
                                <p>My Carts</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default HeaderTop;
