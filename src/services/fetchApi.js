import axios from "axios"

export const fetchById = async (id) => {
    let obj;
    await axios(`http://www.omdbapi.com/?apikey=31ccf49&i=${id}`)
        .then((response) => {
            obj = response?.data
        })
        .catch((error) => {
            console.log(error);
        })
    console.log(obj)
    return obj;
}