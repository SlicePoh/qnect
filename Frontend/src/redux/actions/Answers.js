import { AddAnswer, DeleteAnswer, SearchAnswer } from "../action-types/Answers"

export const addAnswer=(data)=>{
    console.log(data);
    return{
        type: AddAnswer,
        data,
    }
}
export const delAnswer=(data)=>{
    return{
        type: DeleteAnswer,
        data,
    }
}
export const searchAnswer=(query)=>{
    return{
        type: SearchAnswer,
        query,
    }
}
