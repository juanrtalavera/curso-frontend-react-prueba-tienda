import React from "react";
import AddRemove from "../components/AddRemove";
import {useState} from 'react';
import { Link } from "react-router-dom";
import Purchase from '../components/Purchase';
import {useContext} from 'react';
import {Context} from '../context/Context';

const ProductDetail = ({ product }) => {
    const [addProduct, setAddProduct] = useState(1)
    const [{ addItem }] = useContext(Context);
    
    return ( 
        <>
        <div className="container mt-2" >
            <div className='titulosPaginas mb-3'>
                <h2>{product.title}</h2>
            </div>
            <div className='subtitleCarrito mb-1'>
                <Link to='/' style={{color: 'black'}}> Go back home </Link>
            </div>
        </div>
        <div className="container mt-5">
            <div key={product.id} className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body"> 
                            <h5 className="card-title fs-1">{product.title}</h5>
                            <p className="card-text fs-6 fst-italic">{product.description}</p>
                            <p className="card-text fs-3">$ {product.price}</p>
                            { addProduct === 1?
                            <>
                            <AddRemove item={product} stock={product.stock} initial={addProduct} addItem={addItem} />
                            <p className="card-text"><small className="text-muted">Stock {product.stock}</small></p>
                            </>
                            :
                            <Link to='/cart'> <Purchase /> </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}
export default ProductDetail;