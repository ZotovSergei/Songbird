import React from 'react'
import Header from '../Header/Header'
import Answers from '../Body/Answers/Answers.jsx'
import Questions from '../Body/Questions/Questions.jsx'
import Footer from '../Footer/Footer'

import NextButton from '../../components/Shared/NextButton/NextButton'

export default function App() {
  return (
    <div>
      <Header />
      <Questions />
      <Answers />
      <NextButton />
      <Footer />
    </div>
  )
}
