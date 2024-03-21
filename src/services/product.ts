
import { API } from "../constants/constant"
import { https } from "../configs/axios"
import { Product } from "../types/product"

const productService ={
    getList(limit=30,page=1){
        return https.get(API+`products?_limit=${limit}&_page=${page}`)
    },
    getTop(){
        return https.get(API+`products?rating_gte=4.8&rating_lte=4.91`)
    },
    getSame(){
        return https.get(API+`products`)
    },
    getDetail(id:number){
        return https.get(API+`products/${id}`)
    },
    create(data:object){
        return https.post(API+`products`,data)
    },
    update(id:string,data:object){
        return https.put(API+`products/${id}`,data)
    },
    delete(id:number){
        return https.delete(API+`products/${id}`)
    }
}

export default productService