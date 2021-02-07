import list from '../utils/listBirds';
import listBirds from '../utils/listBirds'

const rebirds = (objBirds) => {
    let idx = Math.floor(Math.random()*6);
    return Object.entries(objBirds)
    .map((item)=>{
        item.push(null);
        return item;
    })
    .splice(0,6)
    .map((item,index)=> {
        if (index === idx) item[2] = 'answer';
        return item;
    })
}
const birds  = rebirds(listBirds);
const photoBird = (birds) => {
    const answer = null;
    birds.forEach(element => {
        if (element[2] === 'answer') {
            answer = element;
        }
    });
}


export default birds;