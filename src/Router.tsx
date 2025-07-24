import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    Home,
    BookPage
} from './components/views'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookPage />} />
        </Routes>
    )
}