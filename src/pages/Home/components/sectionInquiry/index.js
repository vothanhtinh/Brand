import classNames from 'classnames/bind';
import styles from './sectionInquiry.module.scss';
import sectionForm from '~/assets/img/sectionForm.png';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FloatingLabel } from 'react-bootstrap';

const cx = classNames.bind(styles);

function SectionInquiry() {
    return (
        <>
            <div className={cx('section__form')}>
                <img src={sectionForm} alt="section" />
                <div className={cx('section__form-content')}>
                    <div className={cx('section__form-text')}>
                        <h2>An easy way to send requests to all suppliers</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                    </div>
                    <div className={cx('section__form-form')}>
                        <h2>Send quote to suppliers</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasic">
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    style={{ color: '#000' }}
                                    defaultValue="What item you need?"
                                />
                            </Form.Group>

                            <FloatingLabel controlId="floatingTextarea2">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity" lg={5} style={{ padding: '0px' }}>
                                    <Form.Control type="text" defaultValue="Quantity" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState" lg={3}>
                                    <Form.Select defaultValue="Psc">
                                        <option>Choose...</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Button variant="primary" type="button">
                                Send inquiry
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SectionInquiry;
