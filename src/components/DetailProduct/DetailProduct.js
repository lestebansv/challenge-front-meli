import CurrencyFormat from 'react-currency-format';
import styles from './DetailProduct.module.scss'

/**
 * Component builds the product description
 * 
 * @param data (JSON) - Product Information
 * @returns Render view product detail
 */
const DetailProduct = (data) => {

    const imgSize = data.data.img[0].size.split('x');
    const condition = data.data.condition.charAt(0).toUpperCase() + data.data.condition.slice(1);

    return (
        <div className={styles.card}>

            <div className={styles.item_image}>
                <img src={data.data.img[0].url} width={imgSize[0]} height={imgSize[1]} alt={data.data.tags}></img>
            </div>

            <div className={styles.info}>
                <div className={styles.condition}>{condition} - {data.data.sold_quantity} vendidos</div>
                <div className={styles.title}>{data.data.title}</div>
                <div className={styles.price}><CurrencyFormat value={data.data.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></div>
                <button className={styles.button}>Comprar</button>
            </div>

            <div className={styles.description}>
                <p className={styles.title_description}>Descripción del producto</p>
                <div className={styles.text_description}>{data.data.description}</div>
            </div>
        </div>
    )
}

export default DetailProduct;