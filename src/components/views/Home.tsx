import React from 'react'
import Book from '../../book-image.png'
import { useNavigate } from 'react-router-dom'
import '../Components.css'

const Home = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/books')
    }

    return (
        <div className="page">
            <header >
                <div className='home-image'>
                    <img src={Book} alt="icon" style={{
                        height: 'auto',
                        width: '20vw',
                        margin: '2rem',
                    }}/>
                </div>
                <button
                    className='home-button'
                    onClick={() => handleClick()}
                >
                    {'Start to Explore!'}
                </button>
                
                <p>
                    This is a small project of mine, aiming to create a fun library experience based on the OpenLibrary API.
                </p>
                <a
                    className="App-link"
                    href="https://openlibrary.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    If you wish you can visit OpenLibrary here
                </a>
            </header>
        </div>
    )
}

export default Home