import { useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { DisplayListProducts } from "../../components/DisplayListProducts/DisplayListProducts";
import { DropDown } from "../../components/DropDown/DropDown";

//data
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

// components
function LearnReact() {
  const [filterText, setFilterText] = useState("");
  const [priceSelected, setPriceSelected] = useState(0);

  return (
    <div>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <DropDown
        dropDownList={filterProductPricecDuplicate()}
        setDropDownList={setPriceSelected}
      />

      <DisplayListProducts products={filterProducts(PRODUCTS, filterText,priceSelected)} />
    </div>
  );
}

// logic
function filterProducts(products, filterText,priceSelected) {
  return products.filter((_product) => {
    const matchProductName = _product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());


    return matchProductName;
  });
}

function getPriceListFromProduct() {
  const listPriceString = PRODUCTS.map((_product) =>
    _product.price.split("$", 2).splice(1, 2)
  );
  return listPriceString.map((priceString) => parseFloat(priceString));
}

function filterProductPricecDuplicate() {
  const filterProductPrice = [];
  const priceList = getPriceListFromProduct();
  priceList.forEach((price) => {
    if (filterProductPrice.some((_price) => _price == price)) {
      return;
    } else {
      filterProductPrice.push(price);
    }
  });
  return filterProductPrice;
}

//implement
export { LearnReact };
