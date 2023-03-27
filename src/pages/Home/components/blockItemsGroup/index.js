import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import ProductVaertical from '../productVaertical';
import styles from './blockItemsGroup.module.scss';

const cx = classNames.bind(styles);

const BlockItemsGroup = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const res = async () => {
            const data = await fetch('https://dummyjson.com/products');
            const json = await data.json();
            setProducts(json.products);
        };
        res();
    }, []);

    return (
        <>
            <Col xm={12} lg={3} style={{ padding: '0px' }}>
                <div className={cx('blockItems__left')}>
                    <img src={props.image} alt="block" />
                    <div className={cx('blockItems__left-text')}>
                        <h3>{props.title}</h3>
                        <Button>Source Now </Button>
                    </div>
                </div>
            </Col>
            <Col xm={12} lg={9} style={{ padding: '0px' }}>
                <div className={cx('blockItemsGroup__right')}>
                    {products.slice(22, 30).map((product) => (
                        <ProductVaertical key={product.id} product={product} />
                    ))}
                </div>
            </Col>

            <div className={cx('button__source')}>
                <Button>
                    Source Now <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            </div>
        </>
    );
};
export default BlockItemsGroup;
