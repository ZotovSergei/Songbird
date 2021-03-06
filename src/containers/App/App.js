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
import ModuleMessage from '../ModuleMessage/ModuleMessage'
import failedAnswer from '../../store/assets/sounds/failedAnswer.mp3'
import succesfullAnswer from '../../store/assets/sounds/succesfullAnswer.mp3'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // idCategoryQuestions: 1,
      groupBirds: list[1],
      enableAnswer: false,
      enableQuestion: false,
      score: 0,
      failedScore: 0,
      categoryId: 1,
      widthScreen: 2,
      minWidthScreen: 400,
      maxWidthScreen: 700,
      averageWidthScreen: 500,
      whenViewModalBox: 1,
      isDisabledNextButton: true,
    }
  }
  componentDidMount() {
    this.setState((state,props)=>({widthScreen: state.widthScreen = window.innerWidth}))
    window.addEventListener('resize',(e)=>{
      if (e.target.innerWidth < this.state.minWidthScreen){
        this.setState((state,props)=>({widthScreen: state.widthScreen = e.target.innerWidth}))
      }
      else if (e.target.innerWidth > this.state.averageWidthScreen && e.target.innerWidth < this.state.maxWidthScreen) {
        this.setState((state,props)=>({widthScreen: state.widthScreen = e.target.innerWidth}))
      }
    })
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

  handlerClickNextButton = () => {
    let categoryId = this.state.categoryId + 1;   
    let category = list[categoryId]
    if (!category)  {
      this.setState((state,props)=>({categoryId: state.categoryId + 1}))
      return
    }
    let prevCategory = categoryId-1;
    if (categoryId > 6) return
   
    services(category).then((response) => {
      this.setState({ groupBirds: response })
      if (this.state.enableAnswer == true) {
        this.setState({enableAnswer: false})  
      }
      this.setState({enableQuestion: true})
      this.setState((state,props)=>(
          {
            categoryId: state.categoryId + 1,
            isDisabledNextButton: state.isDisabledNextButton = !state.isDisabledNextButton}))
      if (prevCategory != 0) document.getElementById(categoryId).classList.toggle('current_category');
    })
    console.log('Клик', this, this.state)
  }

  handlerClickGetRightAnwer = (e,elementsProps) => {
    let audio = new Audio(failedAnswer);
    this.setState({ enableAnswer: false })
    if (elementsProps.answer != null) {
      audio = new Audio(succesfullAnswer)
      document.getElementById(elementsProps.id).classList.toggle(cssModule.selected);
      this.setState({enableAnswer: true})
        for (let item of document.querySelectorAll('.item_answer')) {
          if (item.id != 1) item.disabled = true; 
        }

      if (this.state.categoryId == 7) this.setState((state,props)=>({categoryId: state.categoryId + 1}))
      this.setState((state,props)=>(
        {
          whenViewModalBox: state.whenViewModalBox + 1,
          isDisabledNextButton: state.isDisabledNextButton = !state.isDisabledNextButton
        }))
        this.setState((state,props)=>({score: state.score + 1}))
    }
    else {
      this.setState((state,props)=>({failedScore: state.failedScore + 1}))
    }
    console.log(this.state.failedScore)
    audio.play();
    // console.log(elementsProps)
    // console.log('Клик', this, this.state)
    e.target.disabled = true;

  }

  handlerClickModalBoxExit = () => {
    // document.querySelector('.wrapper_modal_box').remove()
    this.setState((state,props)=>(
      {
        groupBirds: list[1],
        enableAnswer: false,
        enableQuestion: false,
        score: 0,
        categoryId: 1,
        isDisabledNextButton: true,
        whenViewModalBox: 1,
        failedScore: 0,
      }))
      document.querySelectorAll('.current_category').forEach((item,index)=> {
        if (index!= 0) item.classList.toggle('current_category')
      })
  }

  render() {
    return (
      <div>
        <ModuleMessage category={this.state.whenViewModalBox} score={this.state.score} handlerClick={this.handlerClickModalBoxExit} failedScore={this.state.failedScore}/>
        <Header 
          handlerClick={this.handlerClickSetCategoryId}
          score={this.state.score} 
          widthScreen={this.state.widthScreen} 
          category={this.state.categoryId}
          minWidthScreen = {this.state.minWidthScreen}
          />
        {/* <Questions /> */}
        <Answers
          idCategory={this.state.idCategoryQuestions}
          groupBirds={this.state.groupBirds}
          handlerClick={this.handlerClickGetRightAnwer}
          viewElementsAnswers = {this.state.enableAnswer}
          viewElementQuestions = {this.state.enableQuestion}
        />
        <NextButton isDisabled={this.state.isDisabledNextButton} category={this.state.categoryId} handlerClick={this.handlerClickNextButton}/>
        <Footer />
      </div>
    )
  }
}
