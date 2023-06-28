import { useState } from 'react'
import Menu from "./Menu";
import SearchBar from './SearchBar';

function App() {
    const [searchText, setSearchText] = useState('');
    return (
        <div className='main'>
            <Menu searchText={searchText}/>
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </div>
    )
}

export default App
