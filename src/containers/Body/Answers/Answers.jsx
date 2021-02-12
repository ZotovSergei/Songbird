import React from 'react'
import AnswersUi from '../../../components/Body/Answers/Answers'
import Owl from '../../../store/assets/images/owl.jpg'
import ListAnswers from '../ListAnswers/ListAnswers'

export default function Answers(props) {
  const { groupBirds } = props
  const answer = groupBirds.filter((item) => {
    return item.answer != null
  })
  console.log(answer, answer[0] ? answer[0].photo : null)
  const title = 'Owl'
  const description =
    'Dolore proident culpa ad duis laborum. Nisi qui ut aute laborum sit veniam sit officia nostrud ipsum commodo velit. Aliquip et ex qui culpa quis.'
  return (
    <div>
      <AnswersUi
        title={'????'}
        description={description}
        photo={!!answer[0] ? answer[0].photo : null}
      />
      <ListAnswers groupAnswers={groupBirds} />
    </div>
  )
}
