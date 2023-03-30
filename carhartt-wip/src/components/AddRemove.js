import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


const AddRemove = ({stock, initial, item, addItem}) => {
    const [counter, setCounter] = useState(initial);
    
    const Add = () => {
        if(counter < stock ){
            setCounter(counter + 1); 
        }else{
            alert('You have exceeded the limit');
        }     
    }

    const Remove = () => {
        if(counter > 0){
            setCounter(counter - 1); 
        }else{
            alert('You have to select a product');
        }
        
    }    
    
    return(  
        <>
        <div id="cajaCounter">
            <button className="btn btn-outline-danger" id="btnResta" onClick={Remove}> - </button>
            <span id="cajaCantidadCounter"> {counter} </span> 
            <button className="btn btn-outline-success" id="btnSuma" disabled= ""  onClick={Add}> + </button>
        </div>  
            <br/>
            {
                counter > 0 ?
                <button className="btn btn-dark" id="btnAgregar" onClick={() => addItem({item, counter})}> 
                    { <FontAwesomeIcon icon={faCartPlus} style={{marginRight:'5px'}} />}
                    Add to cart
                </button>
                :
                <button className="btn btn-secondary disabled" id="btnAgregar"> 
                    { <FontAwesomeIcon icon={faCartPlus} style={{marginRight:'5px'}} />}
                    Add to cart 
                </button>
            }
        </>
    );
}
export default AddRemove;
