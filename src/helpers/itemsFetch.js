//peticiones a la API

export const getItems = async ( q ) => {

    //recibe la entrada del input para hacer la peticion a la API
    //https://api.mercadolibre.com/sites/MLA/search?q='basquet'&limit=1
    //`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
    try{

        

        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${q}&&limit=4`;
        //console.log(`url:   ${url}` );

        const resp = await fetch(url);
        const data = await resp.json();
        /*
        console.log('*****************************************************');
        console.log(`getItems => id (${q}) => ${data}`);
        console.log('*****************************************************');
        */
        
        return data;

    }catch (error){
        console.log(error);
    }
}

export const getItem = async(id) => {
    try{
        const resp = await fetch(
            `http://localhost:8080/api/items/${id}`);        
        const data = await resp.json();        
        console.log('*****************************************************');
        console.log(`getItem => id (${id}) => ${data}`);
        console.log('*****************************************************');
        return data.results;
    }catch (error){
        console.log(error);
    }
}


