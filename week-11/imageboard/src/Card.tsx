import MoveCard from "./MoveCard";

interface CardProps {
    card: CardProps,
    selectedCard: string,
    setSelectedCard,
    cardSequence: string[],
    setCardSequence,
}
export default function Card ({card, selectedCard, setSelectedCard, cardSequence, setCardSequence}: CardProps) {
    let classNames: string;
    if (card.id===selectedCard) {classNames = "card_content highlight";}
    else {classNames="card_content";}

    return (
        <div className='card'>
        <li className={classNames}>
        <img src={card.url} onClick={()=>setSelectedCard(card.id)}/>
            {selectedCard === card.id ? (<div className='flexbuttons'>
                <MoveCard id={card.id} direction='left'  selectedCard={selectedCard} setSelectedCard={setSelectedCard} cardSequence={cardSequence} setCardSequence={setCardSequence}/>
                <MoveCard id={card.id} direction='right' selectedCard={selectedCard} setSelectedCard={setSelectedCard} cardSequence={cardSequence} setCardSequence={setCardSequence}/>
            </div>) : null}
        </li>
        </div>
    )
}