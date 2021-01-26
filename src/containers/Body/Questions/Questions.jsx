import React from 'react'
import QuestionsUi from '../../../components/Body/Questions/Questions'
import Owl from '../../../store/assets/images/owl.jpg'
import { Bp21 } from '../../../utils/Constants'

export default function Questions() {
  const title = 'Owl'
  const getListBirds = async (url) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch("https://cors-anywhere.herokuapp.com/http://bp21.org.by/ru/books/d_bird7.html", requestOptions)
      .then(response => response.arrayBuffer())
      .then(result => {
        let win1251decoder = new TextDecoder('windows-1251');
        let listBirds = win1251decoder.decode(result);
        debugger
        document.body.innerHTML = listBirds
        console.log(listBirds)
      })
      .catch(error => console.log('error', error))
  }
  getListBirds(Bp21.url)
  const description =
    'Dolore proident culpa ad duis laborum. Nisi qui ut aute laborum sit veniam sit officia nostrud ipsum commodo velit. Aliquip et ex qui culpa quis.'
  return (
    <div>
      <QuestionsUi title={title} description={description} photo={Owl} />
    </div>
  )
}
