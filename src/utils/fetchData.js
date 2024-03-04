import axios from 'axios'
// const options = {
//             method: 'GET',
//             headers: {
//               'X-RapidAPI-Key': Process.env.REACT_APP_RAPIDAPI_KEY,
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

  params: { limit: '500' },
  headers: {
    'X-RapidAPI-Key': Process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  const { data } = await axios.get(url, options)
  return data
}

export const YoutubeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': Process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};