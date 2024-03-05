import axios from 'axios'
// const options = {
//             method: 'GET',
//             headers: {
//               'X-RapidAPI-Key': 'b141a89043mshf58a168c1c6c8c5p1b89fcjsn42cd0cfa0b92',
//               'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//             }
//           };

// export const fetchData = async (url) => {
//    try {
//      const response = await fetch(url, options);
//      const data = await response.json()

//      return data
//    } catch (error) {
//     console.log(error);
//    }
// }

// url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio',

export const options = {

  params: { limit: '50' },
  headers: {
    'X-RapidAPI-Key': '3e520af111msh3b67615f80800c5p103017jsna2ee9b2280d4',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}


export const fetchData = async (url, options) => {
  const { data } = await axios.get(url, options)
  return data
}

export const YoutubeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': 'b141a89043mshf58a168c1c6c8c5p1b89fcjsn42cd0cfa0b92',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};