import { AddAnswer, DeleteAnswer,EditAnswer, SearchAnswer } from "../action-types/Answers"

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
export const editAnswer=(data)=>{
    return{
        type: EditAnswer,
        data,
    }
}
export const searchAnswer=(query)=>{
    return{
        type: SearchAnswer,
        query,
    }
}
