import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from '../back/products';
import ProductDetail from "../pages/Product";

const ProductDetailContainer = () => {
    const [item, setItem] = useState([]) 
    const { id } = useParams();
    
    useEffect(() => { 
        if(id == undefined){
            async function getItem() { 
                const productDetail = await getProducts([]) 
                setItem(productDetail); 
            }
            getItem(); 

        }else{
            async function getItem() { 
                const productDetail = await getProducts([]) 
                setItem(productDetail.find(prod => prod.id == id)); 
            }
            getItem();
        }
    }, [id])
    console.log(id);

    return(
        <>
            <ProductDetail product = {item}   />
        </>
    );
}
export default ProductDetailContainer;