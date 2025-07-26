import React, { useEffect, useState } from 'react'
import '../Components.css'
import BooksGrid from '../organisms/BooksGrid'

const BookPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://openlibrary.org/subjects/love.json?limit=30')
        .then(response => response.json())
        .then(json => {
            const result = json.works || []
            const books = result.map( (item: { title: string; }) => item.title)
            setData(books)
        })
        .catch(error => console.error(`There was an error: ${error}`))
    }, [])

    const handleClick = () => {
        alert(`These are the books I found: ${JSON.stringify(data, null, 2)}`)
    }

    return (
        <div className="page">
            <BooksGrid />
        </div>
    )
}

export default BookPage