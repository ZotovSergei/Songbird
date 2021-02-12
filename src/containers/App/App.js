import React from 'react'
import Header from '../Header/Header'
import Answers from '../Body/Answers/Answers.jsx'
import Questions from '../Body/Questions/Questions.jsx'
import Footer from '../Footer/Footer'
import { list, categoryQuestions } from '../../store/utils/listBirds'
import services from '../../store/utils/services'
import NextButton from '../../components/Shared/NextButton/NextButton'
import { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // idCategoryQuestions: 1,
      groupBirds: list[1],
    }
  }
  handlerClickSetCategoryId = (e) => {
    let category = list[e.target.id]
    services(category).then((response) => {
      this.setState({ groupBirds: response })
    })
    console.log('Клик', this, this.state)
  }
  // handlerClickSetGroupBirds = (group) => {
  //   this.setState({ groupBirds: group })
  //   console.log('Клик', this, this.state)
  // }

  render() {
    return (
      <div>
        <Header handlerClick={this.handlerClickSetCategoryId} />
        <Questions />
        <Answers
          idCategory={this.state.idCategoryQuestions}
          groupBirds={this.state.groupBirds}
        />
        <NextButton />
        <Footer />
      </div>
    )
  }
}
