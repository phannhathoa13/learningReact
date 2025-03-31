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

const test = [
  {id: 0, name : "True", value: true},
  {id: 1, name : "False", value: false},
]

function filterProducts(products, filterText, priceSelected, isProductStocked) {
  return products.filter((_product) => {
    const priceNumber = parseFloat(_product.price.split("$", 2).splice(1, 2));

    const matchProductName = _product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchPrice = priceNumber == priceSelected;
    const matchProductStocked = _product.stocked == isProductStocked;

    if (priceSelected == -1) {
      return matchProductName && matchProductStocked;
    } else {
      return matchProductName && matchProductStocked && matchPrice;
    }
  });
}
function filterDuplicatePriceProduct() {
  return PRODUCTS.reduce((acc, item) => {
    if (!acc.some((test) => test.price === item.price)) {
      acc.push(item);
    }
    return acc;
  }, []);
}



function priceValues() {
  const listPrice = filterDuplicatePriceProduct();
  return listPrice.map((_product, index) => {
    return {
      id: index,
      name: _product.price,
      value: parseFloat(_product.price.split("$", 2).splice(1, 2)),
    };
  });
}

// components
function LearnReact() {
  const [filterText, setFilterText] = useState("");
  const [priceSelected, setPriceSelected] = useState(-1);
  const [isProductStocked, setIsProductStocked] = useState(false);

  console.log(filterDuplicatePriceProduct());

  return (
    <div>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <DisplayListProducts
        products={filterProducts(
          PRODUCTS,
          filterText,
          priceSelected,
          isProductStocked
        )}
      />
      <DropDown values={test} />
    </div>
  );
}

// logic

//implement
export { LearnReact };
