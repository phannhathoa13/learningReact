import { ButtonRemoveItem } from "../RemoveItem/RemoveItem";
import styles from "./DisplayList.module.css";

function DisplayList({ title, list, onClickRemove }) {
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

function renderListItemByTitle(listValue, title, onClickRemove) {
  if (title == "Products") {
    return (
      <li>
        <img src={listValue.image}></img>
        Name: {listValue.name} Price: {listValue.price}
        <ButtonRemoveItem onClickRemove={onClickRemove} dataId={listValue.id} />
      </li>
    );
  } else if (title == "Users") {
    return (
      <li>
        Name: {listValue.name} Username: {listValue.username} email:{" "}
        {listValue.email} phone: {listValue.phone}
        <ButtonRemoveItem onClickRemove={onClickRemove} dataId={listValue.id} />
      </li>
    );
  }
}

export { DisplayList };
