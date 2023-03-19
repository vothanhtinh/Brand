import ServiceItems from '../serviceItems';
import classNames from 'classnames/bind';
import styles from './extraService.module.scss';
import service1 from '~/assets/img/service1.png';
import service2 from '~/assets/img/service2.png';
import service3 from '~/assets/img/service3.png';
import service4 from '~/assets/img/service4.png';
import { faMagnifyingGlass, faShop, faShieldBlank, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const infos = [
    {
        image: service1,
        icon: faMagnifyingGlass,
        text: 'Source from Industry Hubs',
    },
    {
        image: service2,
        icon: faShop,
        text: 'Customize Your Products',
    },
    {
        image: service3,
        icon: faShieldBlank,
        text: 'Fast, reliable shipping by ocean or air',
    },
    {
        image: service4,
        icon: faRightToBracket,
        text: 'Product monitoring and inspection',
    },
];
const cx = classNames.bind(styles);
function ExtraService() {
    return (
        <>
            <div className={cx('title')}>
                <h2>Our extra services</h2>
            </div>
            <div className={cx('block-items')}>
                {infos.map((info, key) => {
                    return <ServiceItems className={cx('block-items__service')} key={key} info={info} />;
                })}
            </div>
        </>
    );
}
export default ExtraService;
