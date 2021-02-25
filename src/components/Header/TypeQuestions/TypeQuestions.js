import React, { Component } from 'react'
import styles from './TypeQuestions.module.css'

export default class TypeQuestions extends Component {

  componentDidMount() {
    document.getElementById(this.props.category).classList.toggle('current_category');
  }

  componentDidUpdate() {
    for (let item of document.querySelectorAll('.category_button')) {
      item.disabled = true; 
    }
  }
  // document.getElementById(this.props.category).classList.toggle('current_category');

  render() {
    const { questions, handler,widthScreen,minWidthScreen } = this.props
    const liQuestions = questions.map((item, index) => (
      <li key={item[0] + '_' + index} className={styles.type_category}>
        <button className={styles.category__button + " category_button"} id={item[0]} onClick={handler}>
          {item[1]}
        </button>
      </li>
    ))
    if (!(widthScreen < minWidthScreen)) liQuestions.splice(3,0,<li key={'break_li'}className={styles.break_li}></li>)
    return <>{ widthScreen < minWidthScreen ? <ul id={styles.categoryId} className={styles.header__questions}>{liQuestions[this.props.category-1]}</ul> : <ul id={styles.categoryId} className={styles.header__questions}>{liQuestions}</ul>}</>

  }
}

