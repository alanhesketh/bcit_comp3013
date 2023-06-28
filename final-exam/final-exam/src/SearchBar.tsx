export default function SearchBar ({searchText, setSearchText}) {
    return (
        <>
            <input type='text' id="new" placeholder="Search the menu" value={searchText} onChange={e => {setSearchText(e.target.value);}}/>
        </>
    )
}