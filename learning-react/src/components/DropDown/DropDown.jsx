function DropDown({ dropDownList, setDropDownList, selectListDropDownInfor }) {
    return (
        <form>
            <label>Choose Price</label>
            <select onChange={e => setDropDownList(e.target.value)}>
                {selectListDropDownInfor !== null && (
                    <option value={-1}>{selectListDropDownInfor}</option>
                )}
                {dropDownList.map((dropDownValue, index) => (
                    <option key={index} value={dropDownValue}>
                        {' '}
                        ${dropDownValue}
                    </option>
                ))}
            </select>
        </form>
    )
}

const listDropDownInfor = {
    displayAllPrice : 'all',
    displayStocked: null
}

export { DropDown, listDropDownInfor }
