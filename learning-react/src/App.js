import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      You clicked {count} time
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count = 0)}>Reset</button>
    </div>
  )
}

function DisplayTextInput() {
  const [textInput, setTextInput] = useState("");
  const [showMassage, setShowMassage] = useState(false);
  return (
    <div>
      <input type="text" placeholder="Enter your name" onInput={(event) => setTextInput(event.target.value)} />
      <button onClick={() => setShowMassage(!showMassage)}>Hiển thị tên</button>
      {showMassage ? <p>Hello {textInput}</p> : null}
    </div>
  )
}

function ChangeStateDisplay() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
      {isDark ? setColorBackGround("black") : setColorBackGround("white")}
    </>
  )
}

function ChangeColorDisplay() {
  const [colorState, setColorState] = useState(true);

  let x = getRamdomNumber();
  let y = getRamdomNumber();
  let z = getRamdomNumber();

  return (
    <div>
      <button onClick={() => setColorState(!colorState)}>Change Color</button>
      {colorState ? setRGBBackgroundColor(x, y, z) : setRGBBackgroundColor(x, y, z)}
    </div>
  )
}

function getRamdomNumber() {
  return Math.floor(Math.random() * 256);
}

function setRGBBackgroundColor(x, y, z) {
  return (
    <div style={{ backgroundColor: `rgb(${x},${y},${z})`, width: "400px", height: "400px" }}></div>
  )
}

function setColorBackGround(color) {
  return (
    <div style={{ backgroundColor: color, width: "400px", height: "400px" }}></div>
  )
}

export { Counter, DisplayTextInput, ChangeStateDisplay, ChangeColorDisplay }