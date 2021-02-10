import {list, categoryQuestions} from '../utils/listBirds'
import {flickr} from '../utils/credentials'

const getBirds = (objBirds) => {
    let idx = Math.floor(Math.random()*6);
    return Object.entries(objBirds)
    .map((item)=>{
        item.push(null);
        item.push(null);
        return item;
    })
    .splice(0,6)
    .map((item,index)=> {
        if (index === idx) item[2] = 'answer';
        return item;
    })
}

const setAsnwerBird = (birds) => {
    let answer = null;
    birds.forEach(element => {
        if (element[2] === 'answer') {
            answer = element;
        }
    });
    return answer;
}

const setPhotoAtAnswerBird = async (answer,birds) => {
    const {url, method , apiKey, mode} = flickr;
    const urlFetch = url+method+apiKey+mode+answer[1];
    debugger
    await fetch(urlFetch)
    .then((response)=> response.json())
    .then((result)=> {
        for (const item of result.photos.photo) {
            birds.forEach(element => {
                if (element[2] === 'answer') {
                    if (!!item.url_m) element[3] = item.url_m;
                }
            });
        }
    })
}

const birds = getBirds(list);
const anwerBird = setAsnwerBird(birds);
console.log(setPhotoAtAnswerBird(anwerBird,birds))


export default birds;