import React, { useEffect, useState } from "react"
import BookCard from "../atoms/BookCard"
import './Organisms.css'

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

const BooksGrid = ({data}: any) => {
    const books = data.map((item: any) => {
        return {
        id: item.key || 'NA',
        author: {
            name: item?.authors[0]?.name || 'NA',
            key: item?.authors[0]?.key || 'NA',
        },
        coverId: item.cover_id || 'NA',
        title: item.title || 'NA',
        year: item.first_publish_year || 'NA',
        subject: item.subject || 'NA',
    }})

    return (
        <div
            className='books-grid'
        >
            {books.map((book: Book) => (
                <BookCard
                    id={book.id}
                    author={book.author.name}
                    title={book.title}
                    year={book.year}
                    subject={book.subject}
                    // Open Library ID
                    format={'id'}
                    // from "cover_edition_key"
                    bookId={book.coverId}
                    size={'L'}
                />
            ))}
            
        </div>
    )
}

export default BooksGrid