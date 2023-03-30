import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { getProducts } from '../back/products';
import { useParams } from "react-router-dom";

const Homepage = ({ }) => {
    const [items, setItems] = useState([]);
    const { category } = useParams();
 
    useEffect(() => {
        if(category == undefined){
            async function drawProducts (){ 
                const datosProducts = await getProducts(); 
                setItems(datosProducts);
            }
            drawProducts();
        }else {
            async function drawProducts (){ 
                const datosProducts = await getProducts(); 
                setItems(datosProducts.filter(item => item.category === category));
            }
            drawProducts();
        }
    }, [category]);

    return (
        <>
            <div className='titulosPaginas mb-4'>
            <h2>Welcome to Carhartt WIP</h2>
            </div>
            <ItemList  products = {items} />
        </>
    );
}
export default Homepage;