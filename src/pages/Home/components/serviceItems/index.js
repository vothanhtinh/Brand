import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './serviceItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function ServiceItems({ info }) {
    console.log();
    return (
        <>
            <div className={cx('service-card')}>
                <div className={cx('service-card__image')}>
                    <img src={info.image} alt="Service Image" />
                </div>
                <p>
                    <FontAwesomeIcon icon={info.icon} />
                </p>
                <div className={cx('service-card__text')}>
                    <h4>{info.text}</h4>
                </div>
            </div>
        </>
    );
}

export default ServiceItems;
