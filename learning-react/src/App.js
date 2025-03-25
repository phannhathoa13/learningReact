import React, { useEffect } from "react";
import { useState } from "react";
const listroducts = [
  { title: "Cabbage", isFruit: false, amount: 20, id: 1 },
  { title: "Garlic", isFruit: false, amount: 30, id: 2 },
  { title: "Apple", isFruit: true, amount: 40, id: 3 },
];


function App() {
  const listItems = listroducts.map(
    (
      product // Key dùng để Trích tới thẳng ví trị hoặc id của phần tử đó mà ko cần reRender lại cả trang
    ) => (
      <li key={product.id} style={{ color: product.isFruit ? "blue" : "red" }}>
        <strong>{product.title}</strong> - Amount: {product.amount}
      </li>
    )
  );
  console.log(listItems);

  return (
    // Dấu <> Nó là 1 fragment, có nghĩa là nó sẽ ko tạo 1 phần tử cha ra để đỡ tốn tài nguyên
    <>
      <h1>Product List</h1>
      <ul>{listItems}</ul>
    </>
  );
}

function clickMeButton() {
  window.alert("you clicked me");
}
function MyButton() {
  return (
    // Khi báo function trong jsx, nếu muốn nó chạy ngay lặp tức thì thêm dấu (), còn muốn chờ đợi thì ko có dấu ()
    <button onClick={clickMeButton}>Click me</button>
  );
}

function CountClickButton() {
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  function handleClick() {
    setCount((count) => {
      count.push(count.length + 1);
      return count;
    });
  }
  return (
    <>
      <button onClick={handleClick}>You clicked {count} time</button>
    </>
  );
}

function handClickButton(setCount,count) {
   setCount(count +1);
}

function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <>
    <button onClick={() => handClickButton(setCount,count)}>You click {count} times</button>
    <button onClick={() => handClickButton(setCount,count)}>You click {count} times</button>
    </>
  )
}

function ToggleText() {
  const [text,setText] = SetUseState(false);
  return (
    <>
      <button onClick={() => setText(!text)}>Toggle</button>
      {text && <p>Hi bro</p> }
    </>
  )
}

function FormInput() {
  const [name,setName] = SetUseState("");
  return (
    <>
    <input type="text" placeholder="Enter Username" onChange={(event) => setName(event.target
      .value)}></input>
    {<p>Xin chao {name}</p>}
    </>
  )
}


function ToogleDarkMode() {
  const [isDark,setisDark] = SetUseState(true);
  return (
    <>
   <div style={{height: "100%", width: "100%", backgroundColor: isDark ? "black" : "white" }}>
    <button onClick={() => setisDark(!isDark)}>{isDark ? "Swtich light Mode" : "Switch Dark Mode"}</button>
   </div>
    </>
  )
}

function DisplayTitle() {
  const [name, setName] = SetUseState("");

  useEffect(() => {
    document.title  = name ?  `Hello: ${name}` : '';
  }, [name])
  return (
    <input type="text" value={name} placeholder="Enter Name" onChange={(event) => setName(event.target.value)}></input>
  )
}

function SetUseState(dataTyes) {
 const [variableName, setVariableName ] = useState(dataTyes);
 return [variableName, setVariableName ]
}



export { App, MyButton, CountClickButton, CounterButton,ToggleText,FormInput ,ToogleDarkMode,DisplayTitle};
