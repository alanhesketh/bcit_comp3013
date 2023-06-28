import { foods } from './DataFile';
import MenuItem from "./MenuItem";

export default function Menu (props) {

    const showitems = foods.filter(item=> item.name.toLowerCase().includes(props.searchText.toLowerCase()));

    return (
        <>
            <h1>A Selection of Foods</h1>
            {showitems.map ((menuitem)=>(<MenuItem key={menuitem.id} item={menuitem} highlight={props.searchText}/>))}
        </>
    )
}