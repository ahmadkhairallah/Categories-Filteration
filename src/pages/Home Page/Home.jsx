import React, { useState } from 'react';
import './Home.scss';

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const content = [
        { category: 'Web', text: 'Web' },
        { category: 'Marketing', text: 'Marketing' },
        { category: 'Marketing', text: 'Marketing' },
        { category: 'Graphic', text: 'Graphic' },
        { category: 'Web', text: 'Web' },
        { category: 'Graphic', text: 'Graphic' },
        { category: 'Marketing', text: 'Marketing' },
        { category: 'Marketing', text: 'Marketing' },
        { category: 'Web', text: 'Web' },
        { category: 'Graphic', text: 'Graphic' }
    ];

    const filteredContent = selectedCategory === 'All' 
        ? content 
        : content.filter(item => item.category === selectedCategory);

    return (
        <>
            <div className='container'>
                <div className='header'>
                    <ul className='menu'>
                        <li className={selectedCategory === 'All' ? 'active' : ''}>
                            <a href='#' onClick={() => handleCategoryClick('All')}>All</a>
                        </li>
                        <li className={selectedCategory === 'Web' ? 'active' : ''}>
                            <a href='#' onClick={() => handleCategoryClick('Web')}>Web</a>
                        </li>
                        <li className={selectedCategory === 'Graphic' ? 'active' : ''}>
                            <a href='#' onClick={() => handleCategoryClick('Graphic')}>Graphic</a>
                        </li>
                        <li className={selectedCategory === 'Marketing' ? 'active' : ''}>
                            <a href='#' onClick={() => handleCategoryClick('Marketing')}>Marketing</a>
                        </li>
                    </ul>
                </div>
                <div className='content'>
                    {filteredContent.map((item, index) => (
                        <div key={index}>{item.text}</div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
