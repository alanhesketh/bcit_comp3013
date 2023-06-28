import {setSearchTextCallback} from "./Types/SetSearchTextCallback";

interface SearchBarProps {
    searchText: string,
    setSearchText: setSearchTextCallback,
}

export default function SearchBar ({searchText, setSearchText}: SearchBarProps) {
    return (
        <>
            <input type='text' id='new' placeholder='Search the menu' value={searchText} onChange={e => {setSearchText(e.target.value);}}/>
        </>
    )
}