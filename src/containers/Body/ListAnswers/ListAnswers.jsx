import React from 'react'
// import listBirds from '../../../store/utils/listBirds'
import ListAnswersUI from '../../../components/Body/ListAnswers/ListAnswers'
import services from '../../../store/utils/services'
export default function ListAnswers() {
    const prepareListBirds =  services;
    return (
        
        <div>
            <ListAnswersUI birds={prepareListBirds}/>
        </div>
    )
}
