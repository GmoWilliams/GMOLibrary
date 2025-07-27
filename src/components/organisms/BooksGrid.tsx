import React, { useEffect, useState } from "react"
import BookCard from "../atoms/BookCard"

interface Book {
    id: string,
    author: {
        name: string,
        key: string,
    },
    coverId: string,
    title: string,
    year: string,
    subject: any,
}

const BooksGrid = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://openlibrary.org/subjects/love.json?limit=30')
        .then(response => response.json())
        .then(json => {
            const result = json.works || []
            setData(result)
        })
        .catch(error => console.error(`There was an error: ${error}`))
    }, [])

    const sample = data.slice(0, 20)

    const books = sample.map((item: any) => {
        return {
        id: item.key || 'NA',
        author: {
            name: item?.authors[0]?.name || 'NA',
            key: item?.authors[0]?.key || 'NA',
        },
        coverId: item.cover_edition_key || 'NA',
        title: item.title || 'NA',
        year: item.first_publish_year || 'NA',
        subject: item.subject || 'NA',
    }})

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                columnGap: '5vw',
                margin: '30px',
                justifyContent: 'center',
            }}
        >
            {books.map((book: Book) => (
                <BookCard
                    id={book.id}
                    author={book.author.name}
                    title={book.title}
                    year={book.year}
                    subject={book.subject}
                    // Open Library ID
                    format={'olid'}
                    // from "cover_edition_key"
                    bookId={book.coverId}
                    size={'L'}
                />
            ))}
            
        </div>
    )
}

export default BooksGrid