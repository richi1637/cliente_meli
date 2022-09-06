import React,{useState,useEffect} from 'react';
import ProductCard from './ProductCard';
import Breadcrumbs from './Breadcrumbs';

import './ProductList.css'

const ProductList = ({location}) => {
    
    const [detail, setDetail] = useState({
        datos: [],
        precio: 0,  //almacena el precio del item
        loading: true,        
    });    
    
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        const query = location.search.substring(3);
        const getItems = async () => {
            try{
                const url = `http://localhost:8080/api/items/items?q=${query}&&limit=4`
                console.log(`url ${url}`);
                const resp = await fetch(url);
                const data = await resp.json();

                //console.log(`data.results.items.price: ${data.results.items.price}`);
                console.log(`data.results.items.price: ${data.results.items}`);
                setDetail(
                {
                    datos: data.results.items,
                    //precio producto convertido a decimal
                    //precio: parseFloat(data.results.items.price.amount+data.results.items.price.decimals),
                    loading: false,
                }
                
                );    
            }catch (error){
                console.log(error);
            }
        }
        getItems();
    }, [query]);
   
    if (!detail.loading) {
        return (
            <div>
                <section>
                    {detail.categorias ? (
                        <Breadcrumbs
                            categories={detail.datos.categorias}
                        />
                    ) : ''
                    }
                </section>
                <section className="productList">
                    {
                    detail.datos.map(item  => (                    
                        <ProductCard key={item.id} item={item} />
                    ))}                
                </section>
            </div>        
        )
    }
}

export default ProductList;
