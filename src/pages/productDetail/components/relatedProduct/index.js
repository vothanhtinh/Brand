import SlideProduct from '../../slideProduct';
import classNames from 'classnames/bind';
import styles from './relatedProduct.module.scss';

const cx = classNames.bind(styles);

function RelatedProduct({ category }) {
    return (
        <>
            <div className={cx('block__items')}>
                <h3>Realated Product</h3>
                <SlideProduct enpoint={category} />
            </div>
        </>
    );
}
export default RelatedProduct;
