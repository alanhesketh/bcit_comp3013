export default function MoveCard ({id, direction, selectedCard, setSelectedCard, cardSequence, setCardSequence}) {

    const shiftCardItem = (arr, fromIndex, toIndex) => {
        if (toIndex == -1 || toIndex == cardSequence.length) {
            return;
        }
        let element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
        setCardSequence(arr);

    }

    const moveCard = (direction, cardToEdit) => {
        const cardIndex = cardSequence.findIndex(card => card.id == cardToEdit);
        if (direction === "left") {
            shiftCardItem(cardSequence, cardIndex, cardIndex - 1);
        } else {
            shiftCardItem(cardSequence, cardIndex, cardIndex + 1);
        }

    }

    return (
        <button className='btn' onClick={()=>{setSelectedCard(null); moveCard(direction, id);}}>{direction}</button>
    )
}
