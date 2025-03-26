import { useState } from "react";

// components
function FilterableProduct({ products }) {
  const [filterText, onFilterText] = useState('');
  const [filterPrice, onFilterPrice] = useState(false);
  const [priceSelect, onPriceSelect] = useState(null);

  const filterProduct = filterProductName(products, filterText, priceSelect);
  const priceList = getPriceFromProducts(products);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        onFilterText={onFilterText}
      />
      <PriceFilter
        priceList={priceList}
        filterPrice={filterPrice}
        onFilterPrice={onFilterPrice}
        onPriceSelect={onPriceSelect}
      />
      <DisplayListProducts
        products={filterProduct}
      />
    </div>
  )
}

function SearchBar({ filterText, onFilterText }) {
  return (
    <div>
      <input type="text"
        value={filterText}
        placeholder="Search..."
        onInput={(e) => onFilterText(e.target.value)} />
    </div>
  )
}

function PriceFilter({ priceList, filterPrice, onFilterPrice, onPriceSelect }) {
  return (
    <div>
      <button onClick={() => onFilterPrice(!filterPrice)}>
        {filterPrice ? 'Hide Price Filter' : 'Show Price Filter'}
      </button>

      {filterPrice && (
        <PriceFilterTable priceList={priceList} onPriceSelect={onPriceSelect} />
      )}
    </div>
  );
}

function PriceFilterTable({ priceList, onPriceSelect }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {priceList.map((price) => (
          <tr key={price}>
            <td>
              <button onClick={() => onPriceSelect(price)}>{price}</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
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

// logic
function filterProductName(products, filterText, selectedPrice) {
  return products.filter((products) => {
    const matchProductName = products.name.toLowerCase().includes(filterText.toLowerCase())
    const selectPrice = selectedPrice ? products.price === selectedPrice : true;
    return matchProductName && selectPrice
  })
}

function getPriceFromProducts(products) {
  return [...new Set(products.map((products_) => products_.price))]
}

//data
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

//implement
function App() {
  return <FilterableProduct
    products={PRODUCTS}
  />
}

export { App }