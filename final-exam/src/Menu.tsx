import { foods } from './DataFile';
import MenuItem from "./MenuItem";
import FoodInterface from "./Interfaces/FoodInterface";

interface MenuProps {
    searchText: string,
}
export default function Menu ({searchText}: MenuProps) {

    const showitems: FoodInterface[] = foods.filter((item: FoodInterface) => item.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <>
            <h1>A Selection of Foods</h1>
            {showitems.map ((menuitem: FoodInterface)=>(<MenuItem key={menuitem.id} item={menuitem} searchText={searchText}/>))}
        </>
    )

}