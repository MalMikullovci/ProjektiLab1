import React, { createContext, useState } from 'react';
import { PRODUCTS, getProductData } from '../components/ProductData';

// Krijimi i nje instance te Context per kontekstin e dyqanit
export const ShopContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
});

export function ShopContextProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    // Funksioni per te marrur sasisne e produktit
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        // Nese sasia eshte e paqarte (produkti nuk gjendet ne shporte), kthe 0
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    // Krijimi i nje funksioni per te shtuar produkt ne Cart
    function addToCart(id) {
        const quantity = getProductQuantity(id);

        // Nese sasia eshte 0 (produkti nuk gjendet ne shporte), shto produktin me sasi 1
        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            // Nese sasia eshte me shume se 0 (produkti gjendet ne shporte), shto nje sasi te re ne produkt
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            )
        }
    }

    // Krijimi i nje funksioni per te larguar nje produkt nga Cart
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        // Nese sasia eshte 1, largo produktin nga shporta
        if (quantity == 1) {
            deleteFromCart(id);
        } else {
            // Nese sasia eshte me shume se 1, zvogelo sasine e produktit per nje
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                )
            )
        }
    }

    // Krijimi i nje funksioni per kthimin e kostose totale te shportes
    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity)
        });
        return totalCost;
    }

    // Krijimi i nje funksioni per largimin e nje produkti nga shporta
    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id != id;
                })
        )
    }

    // Krijimi i nje konteksti te shportes me vlerat e nevojshme
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    };

    // Kthen kontekstin e shportes te mbeshtjelle me <ShopContext.Provider> per te qene i perdorshem nga komponentet femije
    return (
        <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
    );
};


export default ShopContextProvider