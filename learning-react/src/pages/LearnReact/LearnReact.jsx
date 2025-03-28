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

const testArray = ["BMW", "MEC", "AUDI"]
testArray[0] = "HAHA";
console.log(testArray);

// components
function LearnReact() {
  const [filterText, setFilterText] = useState("");
  const [priceSelected, setPriceSelected] = useState(-1);
  const [isProductStocked, setIsProductStocked] = useState(false);

  function convertProductStocked (isProductStocked) {
    return setIsProductStocked(isProductStocked === "true")
  }

  return (
    <div>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <DropDown
        title={"Choose Price"}
        dropDownList={filterProductPricecDuplicate()}
        setDropDownList={setPriceSelected}
        defaultOptionName={"all"}
      />
      <DropDown
        title={"Show Stocked Product"}
        dropDownList={stockedContainerValue()}
        setDropDownList={convertProductStocked}
      />
      <DisplayListProducts
        products={filterProducts(
          PRODUCTS,
          filterText,
          priceSelected,
          isProductStocked
        )}
      />
    </div>
  );
}

// logic
function filterProducts(products, filterText, priceSelected, isProductStocked) {
 
  return products.filter((_product) => {
    const priceNumber = parseFloat(_product.price.split("$", 2).splice(1, 2));

    const matchProductName = _product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchProductStocked = _product.stocked == isProductStocked;

    const matchPrice = priceNumber == priceSelected;
    if (priceSelected == -1) {
   
      return  matchProductName && matchProductStocked
    } else{
      return  matchProductName && matchProductStocked && matchPrice

    }
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
  return (
    <>
      {filterProductPrice.map((num, index) => (
        <option key={index} value={num}>
          {" "}
          ${num}
        </option>
      ))}
    </>
  );
}

function stockedContainerValue() {
 
  return (
    <>
      <option value={false}>False</option>
      <option value={true}>True</option>
    </>
  );
}

//implement
export { LearnReact };
