
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const Purchase = () => {
    return(
        <>
        <button className="btn btn-success" >
            { <FontAwesomeIcon icon={faClipboardCheck} style={{marginRight:'5px'}}/> }
            Purchase 
        </button>  
        </>
    );
}
export default Purchase; 