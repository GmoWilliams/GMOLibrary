import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Atoms.css'

interface Props {
    id: string,
    author: string,
    title: string,
    year: string,
    subject: any,
    format: string,
    bookId: string,
    size: string,
}

const BookCard = ({
    id,
    author,
    title,
    year,
    subject,
    format,
    bookId,
    size,
}: Props) => {

    const navigate = useNavigate()
    const url = `https://covers.openlibrary.org/b/${format}/${bookId}-${size}.jpg`

    const handleClick = () => {
        navigate('/details', {
            state: {
                id,
                cover: url,
                title,
                author,
                year,
                subject,
            }
        })
    }

    return (
        <div className='App'>
            <div className='App-header'>
                <div className='bookCard' onClick={handleClick}>
                    <img 
                        src={url} 
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