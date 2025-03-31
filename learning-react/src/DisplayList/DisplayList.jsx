import { ButtonRemoveItem } from "../RemoveItem/RemoveItem";

function DisplayList({ title,list,onClickRemove }) {
  return (
    <div>
      <h2>{title}</h2>
      {list.map((listValue) => (
        <div key={listValue.id}>
          {renderListItemByTitle(listValue, title, onClickRemove)}
        </div>
      ))}
    </div>
  );
}

function renderListItemByTitle(listValue, title,onClickRemove) {
  if (title == "Products") {
    return (
      <li style={{ display: "flex", alignItems: "center", margin: "10px" , color:"green"}}>
        <img
          src={listValue.image}
          style={{ width: "70px", height: "50px" }}
        ></img>
        Name: {listValue.name} Price: {listValue.price}
        <ButtonRemoveItem onClickRemove={onClickRemove} dataId={listValue.id} />
      </li>
    );
  } else if (title == "Users") {
    return (
      <li style={{margin: "10px",color:"green"}}>
        Name: {listValue.name} Username: {listValue.username} email:{" "}
        {listValue.email} phone: {listValue.phone}
        <ButtonRemoveItem onClickRemove={onClickRemove} dataId={listValue.id} />
      </li>
    );
  }
}

export { DisplayList };
