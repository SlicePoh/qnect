import { GetUser, AddUser, DeleteUser,EditUser, SearchUser } from "../action-types/Users"

export const getUser=(data)=>{
    console.log(data);
    return{
        type: GetUser,
        data,
    }
}
export const addUser=(data)=>{
    console.log(data);
    return{
        type: AddUser,
        data,
    }
}
export const delUser=(data)=>{
    return{
        type: DeleteUser,
        data,
    }
}
export const editUser=(data)=>{
    return{
        type: EditUser,
        data,
    }
}
export const searchUser=(query)=>{
    return{
        type: SearchUser,
        query,
    }
}
