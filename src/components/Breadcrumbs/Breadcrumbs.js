import { useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

/**
 * Component builds the breadcrumb of the product
 * 
 * @param categories (Array) - Product search categories
 * @returns Render view breadcrumbs 
 */
const Breadcrumbs = (categories) => {

    const { search } = useLocation();

    let query = new URLSearchParams(search).get('search');

    if (localStorage.getItem('breadcrumbs')) {
        categories = JSON.parse(localStorage.getItem('breadcrumbs'));
        query = localStorage.getItem('search');
    }

    localStorage.setItem('search', query);
    localStorage.setItem('breadcrumbs', JSON.stringify(categories));

    return <div className={styles.bread}>
        {
            categories.data !== null ? categories.data.map((value) => {
                return `${value} > `
            }) : ''
        }
        <strong>{query}</strong>
    </div>
}

export default Breadcrumbs;