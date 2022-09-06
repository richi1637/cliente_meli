import React,{useState,useEffect,useRef} from "react";
import logoMeli from './../assets/Logo_ML.png';
import searchIcon from './../assets/ic_Search.png';

import './SearchBar.css';

/*
En esta pagina quiero recibir lo que tiene escrito el input
variables de estado para que rect consulte el estado y renderize
hasta que no pida la data la propiedad estara en loading: false,
la propiedad value del control input guarda la propiedad de lo que estoy escribiendo
en onChange va la funcion que actualiza mi variable de estado
esta propiedad me indica cual es el componente que disparo el evento (e.target )
*/

const SearchBar = () => {
    
    const searchInputRef = useRef(null);

    useEffect(()=>{
        searchInputRef.current.focus();
    }, []);
    
    const [inputValue, setInputValue] = useState('');
    
    const changeInput = (e) => {
        setInputValue( e.target.value );
    }
    
    const submitForm = (e) => {
        e.preventDefault();
        const query = document.querySelector('.search input').value;
        window.location = `/items?q=${query}`;
    }

    

    return(
        <div className="Container">            
            <div>
                <img
                src={logoMeli}
                className="header__logo"
                alt="logo Mercado Libre"
                tabIndex={-1}
                />
                <form id="form-search" role="form" tabIndex={0} className="search" onSubmit={submitForm}>
                    <input tabIndex={1} 
                        className="search input" 
                        placeholder="Nunca dejes de buscar" 
                        type='search' 
                        value={inputValue} 
                        ref={searchInputRef}
                        onChange={changeInput}
                    />
                    <button type="submit" className="button" tabIndex={2}>
                        <img src={searchIcon} alt="Boton buscar" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;