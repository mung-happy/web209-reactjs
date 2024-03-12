import axios from "axios"
import { API } from "../constants/constant"

const comicService ={
    getListComic(page=1,limit=30 ){
        return axios.get(API+`/comics?_limit=${limit}&_page=${page}`)
    },
    goodComics(){
        return axios.get(API+'/comics?goodComic=true')
    }
}

export default comicService