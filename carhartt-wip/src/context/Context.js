import { createContext, useState } from "react";

export const Context = createContext() 

const ContextProvider = ({ children }) => {

    const [items, setItems] = useState([]);
    const isInCart = (id) => {
        const foundProduct = items.find(item => item.id === id);
        return foundProduct;
    }
    
    const addItem = ({item, counter}) => {
        isInCart(item.id) ?
            setItems(items.map((prod) => {
                if(prod.id === item.id){
                    prod.counter += counter
                }
                return prod
            }))
            :
            setItems([...items, {id: item.id, name: item.title, price: item.price, image: item.image, counter: counter}]);
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearItems = () => {
        setItems([]);     
    }

    const totalProduct = (id) => {
        let index = items.map(item => item.id).indexOf(id);
        return items[index].price * items[index].counter;
    }

    const subTotalProducts = () => {
        let subTotalSelected = items.map(item => totalProduct(item.id));
        return subTotalSelected.reduce((previousValue, currentValue) => previousValue + currentValue); 
    }

 


    const totalShop = () => {
        return (subTotalProducts());
    }
    const checkoutOrder = () => {
        setItems([]);
        alert("Thank you for your order!");
    }

    return(
        <Context.Provider  value={[{ items, addItem, removeItem, clearItems, totalProduct, subTotalProducts, totalShop, checkoutOrder }]}>
            {children}
        </Context.Provider>
    );

}
export default ContextProvider;
