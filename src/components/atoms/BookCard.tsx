import React from 'react'
import './Atoms.css'

interface Props {
    id: string,
    author: Object,
    title: string,
    year: string,
    format: string,
    bookId: string,
    size: string,
}

const BookCard = ({
    id,
    author,
    title,
    year,
    format,
    bookId,
    size,
}: Props) => {

    const string = `https://covers.openlibrary.org/b/${format}/${bookId}-${size}.jpg`

    return (
        <div className='App'>
            <div className='App-header'>
                <img 
                    src={string} 
                    alt='My Book'
                    style={{
                        height: 'auto', 
                        width: '300px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
                <h2>{title}</h2>
                <h3>{year}</h3>
            </div>
        </div>
    )
}

export default BookCard;