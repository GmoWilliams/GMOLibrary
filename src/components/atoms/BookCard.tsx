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
        <div className='bookCard' 
            onClick={handleClick}
        >
            <img 
                src={url} 
                alt='My Book'
                className='book-image'
            />
            <div>
                <h4 className='clamp-text'>{title}</h4>
                <p className='clamp-text'>{author}</p>
                <p>{year}</p>
            </div>
        </div>
    )
}

export default BookCard;