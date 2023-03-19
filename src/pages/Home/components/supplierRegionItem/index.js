import classNames from 'classnames/bind';
import styles from './supplierRegionItem.module.scss';

const cx = classNames.bind(styles);

function SupplierRegionItem({ country }) {
    return (
        <>
            <div className={cx('item')}>
                <div className={cx('item__image')}>
                    <img src={country.image} alt={country.title}></img>
                </div>
                <div className={cx('item__text')}>
                    <h3>{country.title}</h3>
                    <p>{country.description}</p>
                </div>
            </div>
        </>
    );
}
export default SupplierRegionItem;
