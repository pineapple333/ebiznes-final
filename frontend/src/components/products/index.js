import React from 'react';
import Layout from '../layout/Layout';

import ProductsGrid from './ProductsGrid';

const Products = () => {
    
    return ( 
        <Layout title="BookStore" description="Juest another books store" >
            <div >
                <div className="text-center mt-5">
                    <h1>BookStore</h1>
                    <p>Welcome to the store!</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Products;