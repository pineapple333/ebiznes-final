import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import bookPhoto from '../../Assets/book.jpg';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../Assets'

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase, decrease, removeProduct } = useContext(CartContext);

    const isInCart = cartProduct => {
        return !!cartItems.find(item => item.id === cartProduct.id);
    }

    const itemCount = cartProduct => {
        const target = cartItems.find(item => item.id === cartProduct.id);
        return !!target ? target.quantity : false
    }

    return ( 
        
            <tr>
                <td>
                    <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} 
                        className="img-fluid" 
                        src={bookPhoto} alt="book"/>
                </td>
                <td>
                    {product.name}
                </td>
                <td>
                    {product.description}
                </td>
                <td>
                    <h3 className="text-left">{formatNumber(product.unitPrice)}</h3>
                </td>
                <td>
                    <div className="text-right">

                        {
                            isInCart(product) && 
                            <button onClick={() => increase(product)}
                                className="btn btn-primary btn-sm mr-2 mb-1">
                                    <PlusCircleIcon width={"20px"}/>
                            </button>
                        }

                        {
                            !isInCart(product) && 
                            <button onClick={() => addProduct(product)}
                                className="btn btn-primary btn-sm mr-2 mb-1">
                                    <PlusCircleIcon width={"20px"}/>
                            </button>
                        }

                        {
                            itemCount(product) === 1 &&
                            <button onClick={() => removeProduct(product)}
                                className="btn btn-danger btn-sm mb-1">
                                <TrashIcon width={"20px"}/>
                            </button>
                         }

                        {
                            itemCount(product) > 1 &&
                            <button onClick={() => decrease(product)}
                                className="btn btn-danger btn-sm mb-1">
                                <MinusCircleIcon width={"20px"}/>
                            </button>
                        }
                        
                    </div>
                </td>
            </tr>
    );
}
 
export default ProductItem;