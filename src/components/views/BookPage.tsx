import React, { useEffect, useState } from 'react'
import '../Components.css'
import BooksGrid from '../organisms/BooksGrid'
import GenreOptions from '../molecules/GenreOptions'

const BookPage = () => {

    const [selectedGenre, setSelectedGenre] = useState({
        value: 'love',
        text: 'Love',
    })

    const [data, setData] = useState([])

    useEffect(() => {
        const query = `https://openlibrary.org/subjects/${selectedGenre.value}.json?limit=20`
        fetch(query)
        .then(response => response.json())
        .then(json => {
            const result = json.works || []
            setData(result)
        })
        .catch(error => console.error(`There was an error: ${error}`))
    }, [selectedGenre])

    return (
        <div className="page">
            <h1>{`Books about: ${selectedGenre.text}`}</h1>
            <GenreOptions onSelectGenre={setSelectedGenre} />
            <BooksGrid data={data}/>
        </div>
    )
}

export default BookPage