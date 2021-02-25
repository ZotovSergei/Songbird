import React,{Component} from 'react'
import { render } from 'react-dom'
import HeaderUI from '../../components/Header/Header/Header'
import { categoryQuestions } from '../../store/utils/listBirds'



export default class Header extends Component {
  
  constructor(props) {
    super(props)
    this.typeQuestions = Object.entries(categoryQuestions)
    this.count = props.score
    this.widthScreen = props.widthScreen
    this.categoryId = this.props.category
  }

  render() {
    return <>
    <HeaderUI
      count={this.props.score}
      typeQuestions={this.typeQuestions}
      handler={this.props.handlerClick}
      widthScreen={this.props.widthScreen}
      category={this.props.category}
      minWidthScreen={this.props.minWidthScreen}
    />
  </>
  }

}
