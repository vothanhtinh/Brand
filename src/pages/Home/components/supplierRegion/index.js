import classNames from 'classnames/bind';
import styles from './supplierRegion.module.scss';
import AE from '~/assets/img/AE.png';
import AU from '~/assets/img/AU.png';
import CN from '~/assets/img/CN.png';
import DK from '~/assets/img/DK.png';
import FR from '~/assets/img/FR.png';
import GB from '~/assets/img/GB.png';
import IT from '~/assets/img/IT.png';
import RU from '~/assets/img/RU.png';
import US from '~/assets/img/US.png';
import SupplierRegionItem from '../supplierRegionItem';

const cx = classNames.bind(styles);
const countrys = [
    {
        image: AE,
        title: 'Arabic Emirates',
        description: 'shopname.ae',
    },
    {
        image: AU,
        title: 'Australia',
        description: 'shopname.ae',
    },
    {
        image: US,
        title: 'United States',
        description: 'shopname.ae',
    },
    {
        image: AE,
        title: 'Arabic Emirates',
        description: 'shopname.ae',
    },
    {
        image: RU,
        title: 'Russia',
        description: 'shopname.ru',
    },
    {
        image: IT,
        title: 'Italy',
        description: 'shopname.it',
    },
    {
        image: DK,
        title: 'Denmark',
        description: 'denmark.com.dk',
    },
    {
        image: FR,
        title: 'France',
        description: 'shopname.com.fr',
    },
    {
        image: AE,
        title: 'Arabic Emirates',
        description: 'shopname.ae',
    },
    {
        image: CN,
        title: 'China',
        description: 'shopname.ae',
    },
    {
        image: GB,
        title: 'Great Britain',
        description: 'shopname.co.uk',
    },
];
function SupplierRegion() {
    return (
        <>
            <h2 className={cx('title')}>Suppliers by region</h2>
            <div className={cx('supplierItem')}>
                {countrys.slice(0, 5).map((country, index) => (
                    <SupplierRegionItem country={country} key={index} />
                ))}
            </div>
            <div className={cx('supplierItem')}>
                {countrys.slice(5, 10).map((country, index) => (
                    <SupplierRegionItem country={country} key={index} />
                ))}
            </div>
        </>
    );
}
export default SupplierRegion;
