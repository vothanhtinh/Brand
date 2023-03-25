import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './productDetail.module.scss';
import ProductInfo from './components/productInfo';
import { Row } from 'react-bootstrap';
import RelatedProduct from './components/relatedProduct';
const cx = classNames.bind(styles);

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const loadData = async () => {
            const data = await fetch(`https://dummyjson.com/products/${productId}/`);
            const json = await data.json();
            setProduct(json);
        };
        loadData();
    }, [productId]);

    if (product === null) {
        return <p>Loading...!</p>;
    }

    return (
        <>
            <Row>
                <div className={cx('product')}>
                    <div className={cx('product__info')}>
                        <ProductInfo product={product} />
                    </div>
                </div>
            </Row>
            <Row>
                <RelatedProduct category={product.category} />
            </Row>
        </>
    );
}

export default ProductDetail;
