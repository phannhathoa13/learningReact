function DropDown({ dropDownList, setDropDownList }) {
    return (
        <form>
            <label >Choose Price</label>
            <select onChange={(e) => setDropDownList(e.target.value)}>
                {dropDownList.map((dropDownValue,index) => (
                    <option key={index} value={dropDownValue} > ${dropDownValue}
                    </option>
                ))}
            </select >
        </form>
    );
}

export { DropDown }