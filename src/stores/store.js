import axios from "axios";
import { defineStore } from "pinia";


export const getMovieList = defineStore({
    id: 'movieList',
    state: () => ({
        movieData: [],
        history: [],
    }),
    actions: {
        async fetchApiOmdb() {
            const idDump = [
                'tt3896198',
                'tt1285016',
                'tt0068646',
                'tt4154796',
                'tt4154756',
                'tt0948470',
                'tt6320628',
                'tt2267998',
                'tt4912910',
                'tt1980929'
            ]

            let promises = [];
            idDump.map((id) => {
                promises.push(
                    axios.get(`http://www.omdbapi.com/?apikey=31ccf49&i=${id}`)
                )
            })
            let resultFromPromise = await Promise.all(promises).then((res) => {
                let arrayForMovie = [];
                res?.map(movie => {
                    let obj = { ...movie.data };
                    obj.bookedSeat = []
                    arrayForMovie.push(obj);
                })
                return arrayForMovie
            })
            this.movieData = resultFromPromise;
        },
        onSelect(dataFromPage) {
            this.history.push(dataFromPage);
        }
    }

})