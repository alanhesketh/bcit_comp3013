import React from "react";

function highlightText (text, highlight) {
    var parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {part.toLowerCase() === highlight.toLowerCase() ? (
                <mark className='highlighted'>{part}</mark>
            ) : (part)}
        </React.Fragment>))
}

export default function Menuitem (props) {

    return (
        <div className='card'>
            <h2>{highlightText(props.item.name, props.highlight)}</h2>
            <p>{highlightText(props.item.description, props.highlight)}</p>
        </div>
    )

}