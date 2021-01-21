import React from 'react'
import QuestionsUi from '../../../components/Body/Questions/Questions'
import Owl from '../../../store/assets/images/owl.jpg'

export default function Questions() {
  const title = 'Owl'

  const description =
    'Dolore proident culpa ad duis laborum. Nisi qui ut aute laborum sit veniam sit officia nostrud ipsum commodo velit. Aliquip et ex qui culpa quis.'
  return (
    <div>
      <QuestionsUi title={title} description={description} photo={Owl} />
    </div>
  )
}
