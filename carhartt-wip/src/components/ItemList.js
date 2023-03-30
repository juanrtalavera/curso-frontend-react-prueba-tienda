import React from "react";
import Item from './Item'

const ItemList = ({ products }) => {
        return (
        <>
        <div className="row">
                { products.length > 0 ?
                         products.map( item => 
                                (<Item  id={item.id}
                                        key={item.id}  
                                        title={item.title}
                                        price={item.price} 
                                        image={item.image} 
                                        stock={item.stock} />
                                ))
                        :
                        <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                }   
        </div>
        </>
    );
}
export default ItemList;