const validate = {
    isEmpty(value:string){
        if(value.length == 0){
            return false
        }
        return true
    },
    min(value:any,number:number){
        if(isNaN(value)){
            if(value.length < number){
                return false
            }
            return true
        }else{
            if(value <= number){
                return false
            }
            return true
        }
    },
    max(value:any,number:number){
        if(isNaN(value)){
            if(value.length > number){
                return false
            }
            return true
        }else{
            if(value >= number){
                return false
            }
            return true
        }
    }
}
export default validate