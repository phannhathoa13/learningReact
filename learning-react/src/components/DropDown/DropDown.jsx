function DropDown ({ values, onSelect }) {
  function onSelected (e) {
    const id = parseInt(e.target.value)
    const valueSelect = values.find(value => value.id === id).value
    onSelect(valueSelect)
  }
  return (
    <div>
      <select onChange={e => onSelected(e)}>
        {values.map(_value => {
          return (
            <option key={_value.id} value={_value.id}>
              {_value.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export { DropDown }
