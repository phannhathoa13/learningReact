function DropDown({ title, optionInfoList, setOptionInfoList, defaultOptionName, optionString }) {
    function displayDefaultOptionName() {
        if (defaultOptionName) {
            return (<option key={-1} value={-1}>{defaultOptionName}</option>);
        }
    }
    return (
        <form>
            <label>{title}</label>
            <select onChange={(e) => setOptionInfoList(e.target.value)}>
                {displayDefaultOptionName()}
                {optionInfoList.map((optionInfo, index) => {
                   return <option key={index} value={optionInfo}>
                    {handleOptionString(optionString , optionInfo)}
                    </option>
                })}
            </select>
        </form>
    )
}

function handleOptionString(optionString,optionInfo) {
    if (optionString != undefined && optionString != "$"){
        return optionString[optionInfo]
    }
    else {
        return optionString + optionInfo
    }
}

export { DropDown }
