import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import styles from './ListProducts.module.scss';

/**
 * Component builds the product list search
 * 
 * @param {id, image, price, tittle, address, tags} param0 
 * @returns Render view product list
 */
const ListProducts = ({ id, image, price, tittle, address, tags }) => {
    return (
        <Link className={styles.card} to={{ pathname: `/items/${id}` }}>
            <div className={styles.products_card}>
                <img className={styles.img} src={image} alt={tags} />
            </div>

            <div>
                <p className={styles.price_shipping}>
                    <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$ '} />
                </p>
                <span className={styles.title_item}>
                    {tittle}
                </span>
            </div>

            <div className={styles.address}>
                <span>
                    {address}
                </span>
            </div>
        </Link>
    );
}

export default ListProducts;