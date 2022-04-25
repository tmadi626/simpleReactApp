import {React, useState, useEffect} from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`;

    let products = useAxiosGet(url);
    
    let content = null;
    
    if(products.error){
        content = <p className="font-bold p-6 ">Server caught an error</p>
    }    
    if(products.loading){
        content = <Loader/>
    }
    if(products.data){
        content = 
            products.data.map((product,key) =>
            <div key={product.id}>
                <ProductCard product={product}/>
            </div>
            )
    }


    return (
        <div>
            <h1 className="font-bold text-2xl">Best Sellers</h1>
            {content}
        </div>
    )
    
}
export default Home;