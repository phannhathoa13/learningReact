import { useEffect, useState } from "react";
import { fetchUser$ } from "./controllers/usersControllers";

function LogUseEffectOneTime() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect run ${count}`);
  }, []);
  return (
    <>
      <p>You clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

function DisplayListUser() {
  const [userList, setUserList] = useState([]);
  async function getUsers() {
    console.log("test2");
    setUserList(await fetchUser$());
  }


  useEffect(() => {

    getUsers();
    console.log("test");
  }, []);

  return (
    <>
      {userList.map((users, index) => {
        return <p key={index}>{users.name} </p>;
      })}
    </>
  );
}

function DisplayRealTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(0);

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);


  useEffect(() => {
    console.log(time);
  }, [time]);
  return (
    <>

    </>
  );
}

function CacthUserScroll() {
  useEffect(() => {
    console.log("Test");
    function handleSrollPosition() {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition, "px");
    }
    window.addEventListener("scroll", handleSrollPosition);

    return () => {
      // window.removeEventListener('scroll', handleSrollPosition)
      console.log("Disabled");
    };
  }, []);

  return (
    <div style={{ height: "500px" }}>
      <p>Scroll down and check console</p>
    </div>
  );
}

function ComponentA() {
  const [test, settest] = useState(false);
  function onClick() {
    settest(!test);
  }

  return (
    <>
      <button onClick={onClick}>Click</button>
      {test ? <CacthUserScroll /> : <div></div>}
    </>
  );
}

export {
  LogUseEffectOneTime,
  DisplayListUser,
  DisplayRealTime,
  CacthUserScroll,
  ComponentA,
};
