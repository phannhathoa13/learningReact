// import { useState } from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
  return <FilterableProduct
    products={PRODUCTS}
  />

}

function FilterableProduct({ products }) {
  return (
    <div>
      <DisplayListProducts
        products={products}
      />
    </div>
  )
}

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

export { App }