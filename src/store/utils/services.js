// import { list, categoryQuestions } from '../utils/listBirds'
import { flickr } from '../utils/credentials'

const getBirds = (group) => {
  let idx = Math.floor(Math.random() * group.length)
  group[idx].answer = 'anwer'
  // return Object.entries(group).map((item) => {
  //   return item[1]
  // })
  return group;
}

const groupAnswers = async (group) => {
  const { url, method, apiKey, mode } = flickr
  let urlFetch = null
  let getItemBirdByPhoto = null
  const birds = getBirds(group)

  birds.forEach((item, index) => {
    if (item.answer !== null) {
      getItemBirdByPhoto = { id: index, item: item }
      let nameBirdsEnglish = item.en
      urlFetch = url + method + apiKey + mode + nameBirdsEnglish
    }
  })
  try {
    birds[getItemBirdByPhoto.id].photo = await requestFlickr(urlFetch)
    return await birds
  } catch (error) {
    return new Error(error)
  }
}

const requestFlickr = async (urlFetch) =>
  await fetch(urlFetch)
    .then((response) => response.json())
    .then((result) => {
      for (const item of result.photos.photo) {
        if (!!item.url_m) return item.url_m
      }
    })

export default groupAnswers
