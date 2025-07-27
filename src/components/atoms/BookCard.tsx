import React from 'react'
import './Atoms.css'

interface Props {
    id: string,
    author: string,
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
                <div className='bookCard'>
                    <img 
                        src={string} 
                        alt='My Book'
                        style={{
                            height: 'auto', 
                            width: '200px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                    <h4>{title}</h4>
                    <p>{author}</p>
                    <p>{year}</p>
                </div>
                
            </div>
        </div>
    )
}

export default BookCard;