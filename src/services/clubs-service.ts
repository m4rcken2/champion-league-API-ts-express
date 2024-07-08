import { noContent, ok } from "../../utils/http-response"
import { findAllClubs } from "../repositories/clubs-repository"


export const getClubService = async()=>{
    let response = null
    const data = await findAllClubs()
    if(data){
        response = await ok(data)
    } else{
        response = await noContent()
    }
    return response
}