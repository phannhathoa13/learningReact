import { useEffect, useState } from "react";
import { fetchUser$ } from "./controllers/usersControllers";


function LogUseEffectOneTime() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect run ${count}`);
  }, [])
  return (
    <>
      <p>You clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}

function DisplayListUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getUsers() {
      return setUserList(await fetchUser$())
    }
    getUsers();
  }, [])

  return (
    <>
      {userList.map((users, index) => {
        return <p key={index} >{users.name} </p>
      })}
    </>
  )
}


function DisplayRealTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
  }, [])
  return (
    <>
      <h2>Time</h2>
      {time}
    </>
  )
}

function CacthUserScroll() {
  useEffect(() => {

    function handleSrollPosition() {
      const scrollPosition = window.scrollY
      console.log(scrollPosition, "px");
    }
    window.addEventListener('scroll', handleSrollPosition)

    return () => {
      window.removeEventListener('scroll', handleSrollPosition)
    }
  }, [])

  return (
    <div style={{ height: "500px" }}>
      <p>Scroll down and check console</p>
    </div>
  )
}


export { LogUseEffectOneTime, DisplayListUser, DisplayRealTime, CacthUserScroll }