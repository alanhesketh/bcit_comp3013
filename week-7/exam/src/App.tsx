import React from "react";
import books from './data.js'
import Book from "./components/Book";
import './App.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BookInterface from "./BookInterface";

function App () {
    const [currentBook, setCurrentBook] = React.useState(0);
    let rating = '';

    for (let i = 0; i < books[currentBook].rating; i++) {
        rating += "⭐";
    }

    return (
        <>
            <Box sx={{width:800, bgcolor: 'background.paper'}}>
                <Grid container spacing={0} sx={{
                        '--Grid-borderWidth': '2px',
                        borderBottom: 'var(--Grid-borderWidth) solid'}}>
                    <Grid item xs={6}>
                        <span><img src={books[currentBook].coverImg} /></span>
                    </Grid>
                    <Grid item xs={6}>
                        <h1>{books[currentBook].name}</h1>
                        <p>by {books[currentBook].author}
                            {books[currentBook].coAuthor!=null ? ' & ' + books[currentBook].coAuthor : null }
                        </p>
                        {books[currentBook].sequels!=null ? ('Sequels') : null}
                        {books[currentBook].sequels!=null ? (books[currentBook].sequels.map((sequel:string)=>(<li>{sequel}</li>) )) : null}
                        <p>{rating}</p>
                    </Grid>
                </Grid>

                {books.map((book: BookInterface)=><Book key={book.id} book={book} setBook={setCurrentBook} />)}

            </Box>

        </>
    );
}

export default App;