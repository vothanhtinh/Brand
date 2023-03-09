import classNames from 'classnames/bind';
import styles from '../HeaderTop/HeaderTop.module.scss';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const cx = classNames.bind(styles);

function HeaderBottom() {
    return (
        <header className={cx('wrapper-bottom')}>
            <Navbar bg="#FFFFFF" style={{ color: '#FFFFFF' }}>
                <Container>
                    <Navbar.Brand>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '16px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', fontSize: '16px' }}
                            navbarScroll
                        >
                            <Nav.Link className={cx('la')} href="#action1">
                                All Category
                            </Nav.Link>
                            <Nav.Link className={cx('la')} href="#action2">
                                Hot Offers
                            </Nav.Link>
                            <Nav.Link className={cx('la')} href="#action2">
                                Gif boxes
                            </Nav.Link>
                            <Nav.Link className={cx('la')} href="#action2">
                                Gif boxes
                            </Nav.Link>
                            <Nav.Link className={cx('la')} href="#action2">
                                Menu item
                            </Nav.Link>

                            <NavDropdown title="Helps" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav.Link className={cx('label')}>
                            English, USD
                            <FontAwesomeIcon icon={faChevronDown} style={{ paddingLeft: '10px' }} />
                        </Nav.Link>
                        <Nav.Link className={cx('label')} href="">
                            Ship to
                            <FontAwesomeIcon icon={faChevronDown} style={{ paddingLeft: '10px' }} />
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default HeaderBottom;
