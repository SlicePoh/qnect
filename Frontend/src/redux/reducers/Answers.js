import { GetAnswer, AddAnswer, DeleteAnswer,EditAnswer, SearchAnswer } from "../action-types/Answers";

const initialList=()=>{
    const list=localStorage.getItem("transaction-list")
    let transactions=[];
    if(list){
        transactions=JSON.parse(list)
    }
    return transactions
}
const initialState={
    answerList: initialList(),
    query: "",
}
export const AnswerReducer= (state=initialState,action)=>{
    switch(action.type){
        case GetAnswer:{
            // localStorage.getItem("transaction-list", JSON.stringify([...state.answerList, action.data]))
            return{
                ...state,
                answerList:[action.data],
            };
        }
        case AddAnswer:{
            localStorage.setItem("transaction-list", JSON.stringify([...state.answerList, action.data]))
            return{
                ...state,
                answerList:[...state.answerList, action.data],
            };
        }
        case DeleteAnswer:{
            const {data} = action;
            const updatedList=state.answerList.filter(
                (item)=>item.createdAt!==data.createdAt
            )
            localStorage.setItem("transaction-list", JSON.stringify(updatedList))
            return{
                ...state,
                answerList: updatedList,
            };
        }
        case EditAnswer:{
            const {data} = action;
            const updatedList=state.answerList.filter(
                (item)=>item.createdAt!==data.createdAt
            )
            localStorage.setItem("transaction-list", JSON.stringify(updatedList))
            return{
                ...state,
                answerList: updatedList,
            };
        }
        case SearchAnswer:{
            const {query}=action;
            return {
                ...state,
                query,
            }
        }
        default:
            return state
    }
};