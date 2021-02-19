import React from 'react'
import styles from './Item.module.css'

export default function Item(props) {
  const { id, name, handlerClick,viewElementQuestions} = props

  const getAnswer = (e) => {
    return handlerClick(e, props);
    // console.log(props)
    // console.log(e.target)
    // if (props.answer != null) {
    //   document.getElementById(e.target.id).classList.toggle('right__answer')
    // }
  }

  return (
    <li key={id + '__click__' + name} className={styles.list__item}>
      {viewElementQuestions ?
      (<button
        onClick={getAnswer}
        key={id + '__' + name}
        id={id}
        className={styles.unselected + ' item_answer'}
      >
        {name}
      </button>) : <button
        onClick={getAnswer}
        key={id + '__' + name}
        id={id}
        className={styles.unselected + ' item_answer_hidden'}
      >
        {'--------------------'}
      </button>
      }
    </li>
  )
}
