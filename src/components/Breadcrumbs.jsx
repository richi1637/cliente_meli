import React from 'react'

const Breadcrumbs = (props) => {

  const categorias = props.categories;
  
  const arr = []
  Object.keys(categorias).forEach(key => arr.push({id: categorias[key].id, name: categorias[key].name}))
  
  const listCategories = arr.map((categoria) =>
    <li key={categoria.id}> {categoria.name} </li>
  );
  return (
    <div>
        <ul>
          {listCategories}
        </ul>
    </div>
  )
}

export default Breadcrumbs;