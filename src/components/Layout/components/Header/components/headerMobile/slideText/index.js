import React from 'react';
import classNames from 'classnames/bind';
import styles from './slideText.module.scss';
const cx = classNames.bind(styles);

const SlideText = () => {
    return (
        <>
            <div className={cx('slide__text')}>
                <div className={cx('content')}>
                    <h3>All category</h3>
                </div>
                <div className={cx('content')}>
                    <h3>Gadgets</h3>
                </div>
                <div className={cx('content')}>
                    <h3>Clocthes</h3>
                </div>
                <div className={cx('content')}>
                    <h3>Accessory</h3>
                </div>
            </div>
        </>
    );
};

export default SlideText;
