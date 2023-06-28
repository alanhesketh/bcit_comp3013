import React from "react";
import FoodInterface from "./Interfaces/FoodInterface";

interface MenuItemProps {
    item: FoodInterface,
    searchText: string,
}

export default function MenuItem ({item, searchText}: MenuItemProps) {

    function highlightText (text: string, highlightedText: string) {
        const parts: string[] = text.split(new RegExp(`(${highlightedText})`, "gi"));
        return parts.map((part:string, index:number) => (
            <React.Fragment key={index}>
                {part.toLowerCase() === highlightedText.toLowerCase() ? (<span className='highlighted'>{part}</span>) : (part)}
            </React.Fragment>))
    }

    return (
        <div className='card'>
            <h2>{highlightText(item.name, searchText)}</h2>
            <p>{highlightText(item.description, searchText)}</p>
        </div>
    )

}