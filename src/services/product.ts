import axios from "axios"
import { API } from "../constants/constant"

const productService ={
    getList(limit=30,page=1){
        return axios.get(API+`/products?_limit=${limit}&_page=${page}`)
    },
    getDetail(id:number){
        return axios.get(API+`/products/${id}`)
    }
}

export default productService