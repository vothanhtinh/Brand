import { Button, Col, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import banner from '~/assets/img/banner.png';
import profile from '~/assets/img/profile.png';
import homeDoor from '~/assets/img/homeDoor.png';
import customer from '~/assets/img/customer.png';
import ProductSales from './components/productSales';
import BlockItemsGroup from './components/blockItemsGroup';
import SectionInquiry from './components/sectionInquiry';
const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <Row className={cx('sidebar')}>
                <Col xs="12" lg="3" className={cx('sidebar-left')}>
                    <p>Automobiles</p>
                    <p>Clothes and wear</p>
                    <p>Home interiors</p>
                    <p>Computer and tech</p>
                    <p>Tools, equipments</p>
                    <p>Sports and outdoor</p>
                    <p>Animal and pets</p>
                    <p>Machinery tools</p>
                    <p>More category</p>
                </Col>
                <Col xs="12" lg="7">
                    <div className={cx('banner-img')}>
                        <img src={banner} alt="banner" />
                        <div className={cx('text-sub')}>
                            <h3>Latest trending</h3>
                            <h2>Electronic items</h2>
                            <Button>Learn more</Button>
                        </div>
                    </div>
                </Col>
                <Col xs="12" lg="2">
                    <div className={cx('block-items')}>
                        <div className={cx('user-info')}>
                            <div className={cx('user-info__top')}>
                                <img src={profile} alt="logo-user" />
                                <h3>
                                    Hi, user <br /> let's get stated
                                </h3>
                            </div>
                            <Button className={cx('join-now')}>Join-now</Button>
                            <Button className={cx('login')}>Login</Button>
                        </div>
                        <div className={cx('block-orange')}>
                            <h2>
                                Get US $10 off <br /> with a new <br />
                                supplier
                            </h2>
                        </div>
                        <div className={cx('block-aqua')}>
                            <h2>
                                Send quotes with <br />
                                supplier <br />
                                preferences
                            </h2>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={cx('product__deal')}>
                <Col xm={12} lg={3}>
                    <div className={cx('product__deal-count')}>
                        <div className={cx('product__deal-count-header')}>
                            <h2>Deals and offers</h2>
                            <p>Hygiene equipments</p>
                        </div>
                        <div className={cx('product__deal-count-number')}>
                            <div className={cx('days')}>
                                <p className={cx('days__count')}>04</p>
                                <p>Days</p>
                            </div>
                            <div className={cx('hour')}>
                                <p className={cx('hour__count')}>13</p>
                                <p>Hour</p>
                            </div>
                            <div className={cx('min')}>
                                <p className={cx('min__count')}>3</p>
                                <p>Min</p>
                            </div>
                            <div className={cx('sec')}>
                                <p className={cx('sec__count')}>56</p>
                                <p>Sec</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xm={12} lg={9} style={{ padding: '0px' }}>
                    <ProductSales />
                </Col>
            </Row>
            <Row className={cx('blockItemsGroup')}>
                <BlockItemsGroup title="Home and outdoor" image={homeDoor} />
            </Row>
            <Row className={cx('blockItemsGroup')}>
                <BlockItemsGroup title="Consumer electronics and gadgets" image={customer} />
            </Row>
            <Row>
                <SectionInquiry />
            </Row>
        </>
    );
}

export default Home;
