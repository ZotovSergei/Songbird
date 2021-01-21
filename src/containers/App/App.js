import React from 'react'
import Header from '../Header/Header';
import Answers from '../Body/Answers/Answers'
import Questions from '../Body/Questions/Questions'
import DescriptionBirds from '../Body/DescriptionBirds/DescriptionBirds'
import Footer from '../Footer/Footer'
export default function App() {
    return (
        <div>
            <Header/>
            <Answers/>
            <Questions/>
            <DescriptionBirds/>
            <Footer/>
        </div>
    )
}
