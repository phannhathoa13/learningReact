function SearchBar({ filterText, setFilterText }) {
    return (
      <div>
        <input type="text"
          value={filterText}
          placeholder="Search..."
          onInput={(e) => setFilterText(e.target.value)} />
      </div>
    )
  }

export { SearchBar }