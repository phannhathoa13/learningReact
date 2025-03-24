import React from "react";
import { useState } from "react";
const listroducts = [
  { title: 'Cabbage', isFruit: false, amount: 20, id: 1 },
  { title: 'Garlic', isFruit: false, amount: 30, id: 2 },
  { title: 'Apple', isFruit: true, amount: 40, id: 3 },
];

function App() {
  const listItems = listroducts.map((product) => (  // Key dùng để Trích tới thẳng ví trị hoặc id của phần tử đó mà ko cần reRender lại cả trang
    <li key={product.id} style={{ color: product.isFruit ? 'blue' : 'red' }}>
      <strong>{product.title}</strong> - Amount: {product.amount}
    </li>

  ));
  console.log(listItems);

  return ( // Dấu <> Nó là 1 fragment, có nghĩa là nó sẽ ko tạo 1 phần tử cha ra để đỡ tốn tài nguyên
    <>
      <h1>Product List</h1>
      <ul>{listItems}</ul>
    </>
  );

}

function MyButton() {
  function clickMeButton() {
    window.alert("you clicked me");
  }
  return ( // Khi báo function trong jsx, nếu muốn nó chạy ngay lặp tức thì thêm dấu (), còn muốn chờ đợi thì ko có dấu ()
    <button onClick={clickMeButton}>
      Click me
    </button>
  )
}

function CountClickButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={handleClick}>
        You clicked {count} time
      </button>
    </>
  )
}


export { App, MyButton, CountClickButton };