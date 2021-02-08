import list from '../utils/listBirds';
import listBirds from '../utils/listBirds'
import {flickr} from '../utils/credentials'

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
    let answer = null;
    birds.forEach(element => {
        if (element[2] === 'answer') {
            answer = element;
        }
    });
    return answer;
}
const photo = photoBird(birds);
const photoRequest = async (photoBird) => {
    const {url, method , apiKey, mode} = flickr;
    const urlFetch = url+method+apiKey+mode+photoBird[1];
    debugger
    await fetch(urlFetch).then((response)=> response.json()).then((result)=>console.log(result))
}


console.log(photoRequest(photo))
debugger
export default birds;