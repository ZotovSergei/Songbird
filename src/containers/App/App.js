import React from 'react'
import Header from '../Header/Header'
import Answers from '../Body/Answers/Answers.jsx'
import Questions from '../Body/Questions/Questions.jsx'
import Footer from '../Footer/Footer'
import { list, categoryQuestions } from '../../store/utils/listBirds'
import services from '../../store/utils/services'
import NextButton from '../../components/Shared/NextButton/NextButton'
import { Component } from 'react'
import cssModule from '../../components/Body/ListAnswers/Item/Item.module.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // idCategoryQuestions: 1,
      groupBirds: list[1],
      enableAnswer: false,
      enableQuestion: false,
      score: 0,
    }
  }

  componentDidMount() {
    for (let item of document.querySelectorAll('.category_button')) {
      if (item.id != 1) item.disabled = true; 
    }
  }

  handlerClickDisabledCategory = (e) => {
    if (e.target.id == 6)
    document.getElementById(e.target.id).disabled = true;

    if (e.target.id <=5) {
      let newId = +e.target.id+1;
      document.getElementById(newId).disabled = false;
      document.getElementById(e.target.id).disabled = true;
    }
  }

  handlerClickSetCategoryId = (e) => {
    let category = list[e.target.id]
    services(category).then((response) => {
      this.setState({ groupBirds: response })
      if (this.state.enableAnswer == true) {
        this.setState({enableAnswer: false})  
      }
      this.setState({enableQuestion: true})
    })
    this.handlerClickDisabledCategory(e);
    console.log('Клик', this, this.state)
  }

  handlerClickGetRightAnwer = (e,elementsProps) => {
    this.setState({ enableAnswer: false })
    if (elementsProps.answer != null) {
      document.querySelector(`#${elementsProps.id}`).classList.toggle(cssModule.selected);
      this.setState({enableAnswer: true})
      for (let item of document.querySelectorAll('.item_answer')) {
        if (item.id != 1) item.disabled = true; 
      }  
    }
    this.setState((state,props)=>({score: state.score + 1}))
    console.log(elementsProps)
    console.log('Клик', this, this.state)
    e.target.disabled = true;

  }

  render() {
    return (
      <div>
        <Header handlerClick={this.handlerClickSetCategoryId} score={this.state.score}/>
        <Questions />
        <Answers
          idCategory={this.state.idCategoryQuestions}
          groupBirds={this.state.groupBirds}
          handlerClick={this.handlerClickGetRightAnwer}
          viewElementsAnswers = {this.state.enableAnswer}
          viewElementQuestions = {this.state.enableQuestion}
        />
        <NextButton />
        <Footer />
      </div>
    )
  }
}
