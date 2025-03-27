function DisplayListProducts({ products }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>
            <ProductRow key={product.name} products_={product} />
          )}
        </tbody>
      </table>
    )
  }


  
  
  function ProductRow({ products_ }) {
    return (
      <tr>
        <td>{products_.name}</td>
        <td>{products_.price}</td>
      </tr>
    )
  }

export { DisplayListProducts }