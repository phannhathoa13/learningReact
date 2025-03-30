function ButtonRemoveItem({onClickRemove, dataId}) {
   return <button onClick={() => onClickRemove(dataId)}>Remove</button>
}

export {ButtonRemoveItem}