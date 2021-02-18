import React,{Component} from 'react'
import { render } from 'react-dom'
import HeaderUI from '../../components/Header/Header/Header'
import { categoryQuestions } from '../../store/utils/listBirds'



export default class Header extends Component {
  
  constructor(props) {
    super(props)
    this.typeQuestions = Object.entries(categoryQuestions)
    this.count = props.score
  }

  
  handlerClick = (e) => {
    console.log(e)
  }
  render() {
    return <div>
    <HeaderUI
      count={this.props.score}
      typeQuestions={this.typeQuestions}
      handler={this.props.handlerClick}
    />
  </div>
  }

}
