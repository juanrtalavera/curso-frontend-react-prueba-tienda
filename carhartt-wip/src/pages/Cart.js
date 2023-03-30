import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Cart = () => {
   
    const [{ items, removeItem, clearItems, totalProduct, finalPurchase }] = useContext(Context);
   
    return(
        <>
        <div className="container mt-2" >
            <div className='titulosPaginas mb-3'>
                <h2>Checkout</h2>
            </div>
            {
                items.length > 0 ?
                <div className='subtitleCart mb-2'>
                    <Link to='/' style={{color: 'black'}}> Go back home </Link>
                    <span style={{marginLeft: '800px'}}>
                    <button className="btn btn-dark btn-sm "  onClick={() => clearItems()}>
                    { <FontAwesomeIcon icon={faClipboardCheck} style={{marginRight:'5px'}}/> }
                    Empty Cart
                    </button> 
                    </span>
                </div>
                :
                <div className="alert alert-danger" role="alert">
                   Cart is empty... <Link to='/' style={{textDecoration: 'none', color: 'black'}}> Go back home </Link>
                </div>
            }
            
        </div>
       
        <div className="row">
        {
            items.length > 0 &&
            items.map((item) => (
                <div className="container mt-5" >
                    <div className="row" >
                        <div className="col-sm-8">
                            <div key={item.id} className="card mb-4" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.image} className="img-fluid"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title h1">{item.name}</h5>
                                            <p className="card-text h4">Price: $ {item.price}</p>
                                            <p className="card-text h4">Amount: {item.counter}</p>
                                            <p className="card-text h4">Total: {totalProduct(item.id)}€ </p>
                                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                                { <FontAwesomeIcon icon={faClipboardCheck} style={{marginRight:'5px'}}/> }
                                                Eliminar Producto 
                                            </button>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            ))   
        }
        {
            items.length > 0 &&
             <div className="col-sm-4" style={{position: 'relative'}}>
                <div className="row">
                    <button className="btn btn-success"
                    onClick={finalPurchase}>{<FontAwesomeIcon icon={faClipboardCheck} style={{marginRight:'5px'}}/>}
                    Checkout</button> 
                </div>
            </div>
        }
        </div>
        </>
    );
}
export default Cart;