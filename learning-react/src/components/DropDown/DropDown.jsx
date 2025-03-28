function DropDown({title, dropDownList, setDropDownList, defaultOptionName }) {
    function displayDefaultOptionName() {
        if(defaultOptionName){
            return (<option value={-1}>{defaultOptionName}</option>);
        }
    }
    
    return (
        <form>
            <label>{title}</label> 
            <select onChange={e => setDropDownList(e.target.value)}>
               {displayDefaultOptionName()}
               
                {dropDownList}
            </select>
        </form>
    )
}

export { DropDown }
