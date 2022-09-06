import React, {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import './ProductDetail.css';

const ProductDetail = () => {
    
    const {id} = useParams();
    
    const [detail, setDetail] = useState({
        datos: {},
        precios: {},
        categorias: {},
        precio: 0,  //almacena el precio del item
        //descripcion: '',
        loading: true,
        update: false,
    });
    
    const [query, setQuery] = useState({
        query: id,
    });
    
    useEffect(() => {
        //console.log(`query ${query}`);
        getItemId().then(respuesta=>{
            setDetail({
                datos: respuesta.item,
                precios: respuesta.price,
                categorias: respuesta.categories,
                //precio producto convertido a decimal
                precio: parseFloat(respuesta.item.price.amount),
                //descripcion: respuesta.item.description.replace("<br/>","\n");
                loading: false,
                update: true,
            });            
        });        
    }, [query])

    const getItemId = async () => {
        try{
                
            const url = `http://localhost:8080/api/items/${id}`
            //console.log(`url ${url}`);
            //console.log('getItemId');
            const resp = await fetch(url);
            const data = await resp.json();

            return data.results;
        }catch (error){
            console.log(error);
        }
    }

  return (    
    
    <section key={detail.datos.id}>
       
        <section className="breadcrumb">
            {detail.categorias ? (
                <Breadcrumbs
                  categories={detail.categorias}
                />
              ) : ''
            }    
        </section>
        <div className="body-content">
            <div className="product-body">
                <div className="product-image" >
                    <img
                        src={detail.datos.picture}
                    alt="Imagen del Producto"
                        title={detail.datos.title}
                    />
                </div>           
                <div className="product-resume">
                    <p className="product-title">
                        {detail.datos.title}
                    </p>                    
                    <h2 className="product-resume__h2">
                        <span>
                        {
                            detail.precio.toLocaleString('es-ar',
                            {style: 'currency', 
                            currency: 'ARS', 
                            minimumFractionDigits: 2
                            })
                        }
                        </span>                        
                    </h2>
                    
                    <button type="button" className="product-resume__button">
                        Comprar
                    </button>
                </div> 
                <div className="product-description">
                    <h3 className="description__h3">Descripción del producto</h3>
                    <p className="description__p">
                        {detail.datos.description}
                    </p>
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetail;

