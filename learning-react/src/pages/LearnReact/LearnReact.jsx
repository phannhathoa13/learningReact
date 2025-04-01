import { useState } from 'react'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { DisplayListProducts } from '../../components/DisplayListProducts/DisplayListProducts'
import { DropDown } from '../../components/DropDown/DropDown'

//data
const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
]

const stockedValue = [
  { id: 0, name: 'True', value: true },
  { id: 1, name: 'False', value: false }
]

// components
function LearnReact () {
  const [filterText, setFilterText] = useState('')
  const [priceSelected, setPriceSelected] = useState(-1)
  const [isProductStocked, setIsProductStocked] = useState(true)

  const filterProducts = () => {
    return PRODUCTS.filter(_product => {
      const productPrice = parseFloat(_product.price.split('$', 2).splice(1, 2))

      const matchName = _product.name
        .toLocaleLowerCase()
        .includes(filterText.toLocaleLowerCase())

      const matchPrice = productPrice === priceSelected

      const matchIsStock = isProductStocked === _product.stocked

      if (priceSelected == -1) {
        return matchName && matchIsStock
      }
      return matchPrice && matchName && matchIsStock
    })
  }

  const filterDuplicatePriceProduct = () => {
    return PRODUCTS.reduce((acc, item) => {
      if (!acc.some(test => test.price === item.price)) {
        acc.push(item)
      }
      return acc
    }, [])
  }

  const priceValues = () => {
    const listPrice = filterDuplicatePriceProduct()
    const allOption = {
      name: 'all',
      value: -1
    }
    // map product to data dropdown
    const value = listPrice.map(_product => {
      return {
        name: _product.price,
        value: parseFloat(_product.price.split('$', 2).splice(1, 2))
      }
    })
    value.unshift(allOption)
    // map key by index
    return value.map((value, index) => {
      return {
        id: index,
        ...value
      }
    })
  }

  return (
    <div>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <DropDown values={priceValues()} onSelect={setPriceSelected} />
      <DropDown values={stockedValue} onSelect={setIsProductStocked} />
      <DisplayListProducts products={filterProducts()} />
    </div>
  )
}

export { LearnReact }
