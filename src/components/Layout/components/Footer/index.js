import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => (
    <footer className={cx('wrapper')}>
        <Container>
            <div className={cx('inner')}>
                <Row>
                    <Col lg={3}>
                        <div className={cx('rowItems__left')}>
                            <h5>Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer</p>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className={cx('rowItems__right ')}>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="footer-copyright text-center py-3">
                © 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
        </Container>
    </footer>
);

export default Footer;
