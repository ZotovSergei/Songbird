import React from 'react'

export default function ModuleMessage({category, score}) {
    const handlerClick = () => {
        document.querySelector('.wrapper_modal_box').remove()
    }
    const text = (score == 6 ? 'Птицы отгаданы успешно' : score > 6 && score < 14 ? 'Результат средний' : 'Игра завершена');
    const result = text +'. Заработанные очки: ' + score
    return (
        <>
            {category >7 ? <div className="wrapper_modal_box">                
                <section className={'module__box'}>{result}
                <button onClick={handlerClick} className={'unselected'}>{"Выйти"}
                </button></section> 
            </div>  : false}
        </>
    )
}
