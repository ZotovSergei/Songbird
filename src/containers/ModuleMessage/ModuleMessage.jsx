import React from 'react'
import like from '../../store/assets/images/like.svg';
import dislike from '../../store/assets/images/dislike.svg';
import average from '../../store/assets/images/average.svg';


export default function ModuleMessage({category, score, handlerClick, failedScore}) {
   
    let img = dislike;
    let text = 'Игра завершена. Попробуйте снова'
    if (score == 6 && failedScore == 0) {
        text = 'Птицы отгаданы успешно. Мастер'
        img = like;
    }
    else if (score == 6 && failedScore < 14) {
        text = 'Результат средний. Вам есть к чему стремится'
        img = average;
    }
    const result = text +'. Заработанные очки: ' + score + '. Количество неверных ответов: ' + failedScore
    

    return (
        <>
            {category > 6 ? <div className="wrapper_modal_box">                
                <section className={'module__box'}>
                    <p>{result}</p>
                    <img width='100' src={img} alt={img}/>
                <button onClick={handlerClick} className={'unselected'}>{"Выйти"}
                </button></section> 
            </div>  : false}
        </>
    )
}
