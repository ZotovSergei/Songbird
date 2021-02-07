import React from 'react'
import AnswersUi from '../../../components/Body/Answers/Answers'
import Owl from '../../../store/assets/images/owl.jpg'
import ListAnswers from '../ListAnswers/ListAnswers'

export default function Answers() {
  const title = 'Owl'

  const description =
    'Dolore proident culpa ad duis laborum. Nisi qui ut aute laborum sit veniam sit officia nostrud ipsum commodo velit. Aliquip et ex qui culpa quis.'
  return (
    <div>
      <AnswersUi title={title} description={description} photo={Owl} />
      <ListAnswers/>
    </div>
  )
}
