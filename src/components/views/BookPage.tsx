import React, { useEffect, useState } from 'react'
import '../Components.css'

const BookPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://openlibrary.org/subjects/love.json?limit=30')
        .then(response => response.json())
        .then(json => {
            const result = json.works || []
            const books = result.map( (item: { title: string; }) => item.title)
            console.log(`These are the books: ${JSON.stringify(books, null, 2)}`)

            setData(books)
        })
        .catch(error => console.error(`There was an error: ${error}`))
    }, [])

    const handleClick = () => {
        alert(`These are the books I found: ${JSON.stringify(data, null, 2)}`)
    }

    return (
        <div className="page">
            <button
                className='button'
                style={{backgroundColor: 'white'}}
                onClick={handleClick}
            >
                Click here
            </button>
        </div>
    )
}

export default BookPage