import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import './Organisms.css'

interface Book {
    id: string,
    cover: string,
    title: string,
    author: string,
    year: string,
    subject: any,
}

const BookDetails = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const book = location.state as Book
    const [data, setData] = useState({})

    /*
    const getOtherBooks = () => {
        const query = `...`
        fetch(query)
        .then(response => response.json())
        .then((item) => {
            const result = {
                id: item.key,
                languages: item.languages,
                authors: item.authors,
                first_sentence: item.first_sentence,
                subject: item.subject,
            }
            setData(result)
        })
    }
    */

    if (!book) {
        navigate('/')
        return null
    } else {
        // getOtherBooks()
    }

    return (
        <div className="book-details-page">
            <div className="book-details-container">
                <img 
                    src={book.cover} 
                    alt='My Book'
                    style={{
                        height: 'auto', 
                        width: '300px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />

                <div className='book-info'>
                    <h1>{'Title: ' + book.title}</h1>
                    <h2>{'Author: ' + book.author}</h2>
                    <h2>{'Publication Year: ' + book.year}</h2>
                    <h2>{'Subjects:'}</h2>
                    <p>{book.subject.join(', ')}</p>
                </div>
                
            </div>
        </div>
    )
}

export default BookDetails