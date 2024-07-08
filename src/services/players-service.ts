import * as HttpResponse from "../utils/http-response"
import { PlayerModel } from "../models/players-model"
import { StatModel } from "../models/stat-model"
import * as repository from "../repositories/players-repository"


export const getPlayerService = async()=>{
    const data = await repository.findAllPlayers()
    let response = null
    if(data){
         response =await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    

    return response
}

export const getPlayerByIdService= async(id:number) =>{
    const data = await repository.findPlayerById(id)
    let response = null;
    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}

export const createPlayerService = async (player: PlayerModel)=>{
    let response = null;

    if(Object.keys(player).length !== 0){
        await repository.insertPlayer(player)
        response = await HttpResponse.created()
    }
    return response
}

export const updatePlayerService = async(id: number , statistics: StatModel)=>{
    let response = null
    const data = await repository.findAndModifyPlayer(id, statistics)
    
    if(Object.keys(data).length !== 0){
      response = HttpResponse.ok(data)   
    }else{
        response = HttpResponse.badRequest()
    }
    return response
}

export const deletePlayerByIdService = async(id: number)=>{
    let response = null
    const isDeleted = await repository.findAndDeletePlayer(id)
    if(isDeleted){
        response = await HttpResponse.ok({message: "deleted"})
    }else{
        response = await HttpResponse.badRequest()
    }
    return response
}