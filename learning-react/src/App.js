import { useState } from "react";

function ShowFormInputNameAndAge() {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    gender: "",
    hobbies: []
  })

  const handleInput = (e) => {
    handleInputChange(e, setUserData, userData);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Your Name</label><br />
        <input type="text" name="name" value={userData.name} placeholder="Name..." onChange={handleInput} /><br />

        <label htmlFor="age">Your Age</label><br />
        <input type="number" name="age" placeholder="Age..." value={userData.age} onChange={handleInput} /><br />

        <label htmlFor="gender">Choose Gender</label><br />
        <input type="radio" name="gender" value={"Female"} onChange={handleInput} />Female
        <input type="radio" name="gender" value={"Male"} onChange={handleInput} />Male<br />

        <label htmlFor="hobbies">Choose Hobbies</label><br />
        <input type="checkbox" name="hobbies" value={"Singing"} onChange={handleInput} />Singing
        <input type="checkbox" name="hobbies" value={"Gaming"} onChange={handleInput} />Gaming
        <input type="checkbox" name="hobbies" value={"Coding"} onChange={handleInput} />Coding
        <br />
        <input type="submit" value="Submit" onClick={(e) => {
          e.preventDefault();
          console.log(userData);
        }} />
      </form>
    </div>
  )
}

function handleInputChange(e, setUserData, userData) {
  const { type, checked } = e.target;
  if (type == "checkbox") {
    if (checked) {
      setUserData({
        ...userData,
        hobbies: [...userData.hobbies, e.target.value]
      })
    }
    else {
      setUserData({
        ...userData,
        hobbies: userData.hobbies.filter((hobby) => hobby !== e.target.value)
      })
    }
  }
  else {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
}

export { ShowFormInputNameAndAge }