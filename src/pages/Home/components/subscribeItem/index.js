import classNames from 'classnames/bind';
import styles from './subscribeItem.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function SubscribeItem() {
    return (
        <div className={cx('block__items')}>
            <div className={cx('block__items-text')}>
                <h3>Subscribe on our newsletter</h3>
                <p>Get daily news on upcoming offers from many suppliers all over the world</p>
            </div>
            <div className={cx('block__items-form')}>
                <div className={cx('block__items-form-input')}>
                    <input type="text" placeholder="Email" name="user_name" />
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
                <input type="button" className={cx('block__items-form-button')} value="Subscribe" />
            </div>
        </div>
    );
}
export default SubscribeItem;
