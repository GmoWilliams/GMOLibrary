import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    Home,
    BookPage
} from './components/views'
import BookDetails from './components/organisms/BookDetails'
import ScrollToTop from './components/atoms/ScrollToTop';

export default function AppRouter() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BookPage />} />
                <Route path="/details" element={<BookDetails />} />
            </Routes>
        </>
    )
}