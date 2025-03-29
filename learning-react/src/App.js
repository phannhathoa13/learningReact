function UserList() {
  return (
    <div >
      <UserCard name={"Nhat Hoa"} age={"18"} avatar={"hoaphan.png"} />
      <UserCard name={"Minh Tan"} age={"20"} avatar={"minhtan.png"} />
      <UserCard name={"Tan Dat"} age={"21"} avatar={"tandat.png"} />
    </div>
  )
}

function UserCard({ name, age, avatar }) {
  return (
    <div>
      <Button name={name} />
      <div>Name : {name}</div>
      <div>age : {age}</div>
      <div>avatar : {avatar}</div>
    </div>
  )
}

function Button({ name }) {
  return (
    <>
      <button onClick={() => {
        window.alert(name);
      }}>{name}</button>
    </>
  )
}

export { UserList }