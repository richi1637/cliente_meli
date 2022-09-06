import React from 'react';
import { Link } from 'react-router-dom';
import shipping from './../assets/ic_shipping.png';
import './ProductCard.css';

const ProductCard = ({item}) => {
    const precio = parseFloat(item.price.amount+item.price.decimals);
    
  return (            
    <section className="product" key='{item.id}' >
        <section className='thumbnail'>
            <Link to={`/items/${item.id}`}>
                <img className="img" src={item.picture} alt={item.title} />
            </Link>
        </section>
        <section>            
            <section>
                <h1 className='price'>
                    {
                            precio.toLocaleString('es-ar',
                            {style: 'currency', 
                            currency: item.price.currency, 
                            minimumFractionDigits: 2
                            })
                    
                    }
                </h1>
                <h2 className='free_shipping'>
                    {item.free_shipping ? <img src={shipping} alt=""/> : ''}
                </h2>                
            </section>
            <section>
                <h3 className='title'>{item.title}</h3>
            </section>
        </section>    
        <section>
            <p className='city'>
                {item.city_name}
            </p>
        </section>
    </section>    
  )
}

export default ProductCard;
