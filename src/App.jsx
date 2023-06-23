import React from 'react'
import Hero from './components/Hero'
import Demoo from './components/Demoo';
import './App.css';

const App = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>
            <div className='app'>
                <Hero />
                <Demoo />
            </div>
        </main>
    )
}

export default App