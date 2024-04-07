import { GetQuestion, AddQuestion, DeleteQuestion,EditQuestion, SearchQuestion } from "../action-types/Questions"

export const getQuestion=(data)=>{
    console.log(data);
    return{
        type: GetQuestion,
        data,
    }
}
export const addQuestion=(data)=>{
    console.log(data);
    return{
        type: AddQuestion,
        data,
    }
}
export const delQuestion=(data)=>{
    return{
        type: DeleteQuestion,
        data,
    }
}
export const editQuestion=(data)=>{
    return{
        type: EditQuestion,
        data,
    }
}
export const searchQuestion=(query)=>{
    return{
        type: SearchQuestion,
        query,
    }
}
