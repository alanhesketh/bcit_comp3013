import { useState } from 'react'
import Card from "./Card";


function seedCards (count: number) {
    const cards = [];
    for (let i=0; i<count; i++) {
        cards.push ({id: i, url: 'https://picsum.photos/300/300?random='+i});
    }
    return cards;
}

function App() {
    const [numberOfCards, setNumberOfCards] = useState(1);
    const [selectedCard, setSelectedCard] = useState(null);
    const [cardSequence, setCardSequence] = useState(seedCards(numberOfCards));

  return (
    <div className='main'>
        <h1>Imageboard</h1>
        <div>
        <input type="number" name="cards" min="1" max="20" value={numberOfCards} onChange={(e)=>setNumberOfCards(e.target.value)} />
        <button onClick={()=>setCardSequence(seedCards(numberOfCards))} >Set Cards</button>
        </div>
      <ul className='cards'>
          {cardSequence.map ((card)=> (<Card key={card.id} card={card} selectedCard={selectedCard} setSelectedCard={setSelectedCard} cardSequence={cardSequence} setCardSequence={setCardSequence}/>))}
      </ul>
    </div>
  )
}

export default App


