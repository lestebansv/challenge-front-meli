import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import DetailProduct from "../components/DetailProduct/DetailProduct";
import connection from "../utils/channel";
import Error from "./error";

/**
 * View detail and breadcrumbs
 * Join component "Breadcrumbs" and "DetailProduct"
 * 
 * @returns Rendering product detail view with breadcrumbs
 */
const DescriptionProduct = () => {

    const { id } = useParams();
    const [productItems, setProductItems] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getDescriptionProduct();
    }, [id]);

    /**
     * @function getDescriptionProduct Search and get description of product
     */
    const getDescriptionProduct = async () => {
        const data = await connection(id, 'description');

        if (!data.status) {
            setProductItems(data);
            setLoader(true);
        }
    }

    return (loader &&
        <>
            <Breadcrumbs />
            {typeof productItems !== 'undefined' ?
                <DetailProduct data={productItems.item} />
                : <Error />}
        </>
    )
}

export default DescriptionProduct;