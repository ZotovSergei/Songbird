import React from 'react'
import Item from '../ListAnswers/Item/Item'

export default function ListAnswers(props) {
    const {birds} = props;
    
    const answers = birds.map((item)=> {
        return <Item id={item[0]} name={item[1]} answer={item[2]}/>
    })

    return (
        <div>
            {answers}
        </div>
    )
}
