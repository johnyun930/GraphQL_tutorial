import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    // return fetch(`${API_URL}`)
    //     .then((res) => res.json())
    //     .then((json) => json.data.movies);

    let REQUEST_URL = API_URL;
    if(limit > 0){
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating>0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    console.log(REQUEST_URL);
    return fetch(`${REQUEST_URL}`)
        .then((res) => res.json())
        .then((json) => json.data.movies);
};

// export const people = [{
//         id: 0,
//         name: "johnny",
//         age: 18,
//         gender: "M"
//     },
//     {
//         id: 1,
//         name: "nimi",
//         age: 18,
//         gender: "M"
//     },
//     {
//         id: 2,
//         name: "kel",
//         age: 18,
//         gender: "M"
//     },
//     {
//         id: 3,
//         name: "Cheng",
//         age: 18,
//         gender: "M"
//     },
//     {
//         id: 4,
//         name: "Sue",
//         age: 18,
//         gender: "M"
//     },
// ];

// export let coding = [{
//         id: 0,
//         name: "Hello World",
//         score: 10
//     },
//     {
//         id: 1,
//         name: "Javascript",
//         score: 55
//     },
//     {
//         id: 2,
//         name: "TypeScript",
//         score: 93

//     },
//     {
//         id: 3,
//         name: "GO lang",
//         score: 98
//     }
// ];

// export const getByID = id => {
//     const filteredPeople = people.filter(person => person.id === id);
//     return filteredPeople[0];
// }

// export const deleteCode = id => {
//     const cleanedCode = coding.filter(coding => coding.id !== id);
//     if (coding.length > cleanedCode.length) {
//         coding = cleanedCode;
//         return true;
//     } else {
//         return false;
//     }
// }

// export const addCoding = (name, score) => {
//     const newMovie = {
//         id: coding.length + 1,
//         name: name,
//         score: score
//     };
//     coding.push(newMovie);
//     return newMovie;
// }