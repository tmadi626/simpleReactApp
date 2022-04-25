import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../Hooks/HttpRequests";
import Loader from "../components/Loader";

function Product(){
    const { id } = useParams()
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;

    let product = useAxiosGet(url);

    let content = null;

    if(product.error){
        content = <p className="font-bold p-6 ">Server caught an error</p>
    }    
    if(product.loading){
        content = <Loader/>
    }

    if(product.data){
        return (content = 
            <div>
            <div >
                <img  className="object-cover mx-auto"
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name}
                />
            </div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
        )
        }
        return(
            <div>
                {content}
            </div>
        )
    }

export default Product;