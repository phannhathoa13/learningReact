function DropDown({ values, onSelect }) {
  const array = [
    { name: "value1", value: 1 },
    { name: "value2", value: 2 },
    { name: "value3", value: 3 },
  ];
  function onSelected(e) {
    const value = e.target.value;
    onSelect(value);
    console.log(value);
  }
  return (
    <div>
      <select onChange={(e) => onSelected(e)}>
        {values.map((_value) => {
          return <option key={_value.id} value={_value.value}>{_value.name}</option>;
        })}
      </select>
    </div>
  );
}

export { DropDown };
