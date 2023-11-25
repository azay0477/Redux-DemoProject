// import axios from/    "axios";
import { store } from "./store";
import { getAllPosts } from "./actions"

// export async function apiData(){
//     const url = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//             'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
//         }
//     };

//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(response);

//     store.dispatch(thePostData(response))
// }




export async function apiData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let myApiData = await response.json();
    store.dispatch(getAllPosts(myApiData))
}

// export async function apiData(){
//     let response = await axios.get("https://dummyapi.online/api/movies");
//     // let myApiData = response.data;
//     // console.log(response.data);
//     // return myApiData;
//     store.dispatch(thePostData(response.data))
// }