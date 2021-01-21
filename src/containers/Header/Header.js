import React from 'react'
import HeaderUI from '../../components/Header/Header';

export default function Header() {
    const typeQuestions = [
        'Разминка',
        'Воробьиные',
        'Лесные птицы',
        'Певчие птицы',
        'Хищные птицы',
        'Морские птицы'
    ]
    const count = 0;
    return (
        <div>
            <HeaderUI count={count} typeQuestions={typeQuestions} />
        </div>
    )
}
