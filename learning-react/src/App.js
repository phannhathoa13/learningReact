import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import { Home, RedirectPage } from './pages/Home';
import Contact from './pages/Contact';
import { UserDetail } from './pages/UserDetail';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<>
                    <Home />, <RedirectPage />
                </>} />
                <Route path="/about" element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/users/:id' element={<UserDetail />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export { App };