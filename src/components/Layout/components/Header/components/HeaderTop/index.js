import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMessage, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';
import logo from '~/assets/img/logo.png';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="logo" />
                    <h2 className={cx('text-logo')}>Brand</h2>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search" spellCheck={false} />
                    <Form.Select size="lg" style={{ width: '140px', borderRadius: '0px', border: '1px solid #0D6EFD' }}>
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
                        <p>My Carts</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderTop;
