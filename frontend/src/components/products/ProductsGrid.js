import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductsGrid = () => {

    const {products} = useContext(ProductsContext)

    return (
            <table style={{width: "100%"}}>
                <thead >
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Unit price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <ProductItem key={product.id} product={product}/>
                        ))
                    }
                </tbody>
            </table>
     );
}
 
export default ProductsGrid;