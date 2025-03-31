import { useEffect, useState } from "react"
import { DisplayList } from "./DisplayList/DisplayList"
import { fetchListUsers$ } from "./controllers/usersControllers";

const listProducts = [
  { id: 1, name: "iPhone 15 Pro", price: "30.000.000 VNĐ", image: "https://tse4.mm.bing.net/th?id=OIP.HdFzMBPOKKKvmqjw28b1NAHaE7&w=315&h=315&c=7" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", price: "28.000.000 VNĐ", image: "https://tse4.mm.bing.net/th?id=OIP.evJadDOV8fCafwFpfXlCFwHaHb&w=474&h=474&c=7" },
  { id: 3, name: "MacBook Air M3", price: "32.000.000 VNĐ", image: "https://tse4.mm.bing.net/th?id=OIP.SDaCiuck6kvvKQGXWPIVhgHaEK&w=266&h=266&c=7" },
  { id: 4, name: "iPad Pro M2", price: "25.000.000 VNĐ", image: "https://tse2.mm.bing.net/th?id=OIP.jIvaIyHCvAh37N-ryLYhuAHaHa&w=474&h=474&c=7" },
  { id: 5, name: "Sony WH-1000XM5", price: "9.000.000 VNĐ", image: "https://tse4.mm.bing.net/th?id=OIP.jzVtyTSDIE3hMKn307UNFQHaHa&w=474&h=474&c=7" }
]

function DisplayListProducts() {
  const [products, setProducts] = useState(listProducts);

  const removeProduct = (id) => {
    removeItem(id, setProducts)
  }

  return (
    <>
      <DisplayList title={"Products"} list={products} onClickRemove={removeProduct} />
    </>
  )
}

function DisplayListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, [])

  const removeUser = (id) => {
    removeItem(id, setUsers);
  }

  return (
    <>
      <DisplayList title={"Users"} list={users} onClickRemove={removeUser} />
    </>
  )
}


function removeItem(id, setState) {
  setState((preItem) => preItem.filter((item) => item.id !== id));
}

async function getUsers(setUsers) {
  setUsers(await fetchListUsers$());
}

export { DisplayListProducts, DisplayListUser }