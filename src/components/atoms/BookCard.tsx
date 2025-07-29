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
            style={{
                width: '15rem',
                marginBottom: '2rem',
            }}
        >
            <img 
                src={url} 
                alt='My Book'
                style={{
                    backgroundColor: 'white',
                    borderWidth: '0.2rem',
                    borderStyle: 'solid',
                    borderColor: 'white',
                    height: 'auto', 
                    width: '200px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
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