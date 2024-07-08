import { PlayerModel } from "../models/players-model";
import { StatModel } from "../models/stat-model";
import database from '../data/database.json'

const players: PlayerModel[] = database;

export const findAllPlayers = async(): Promise<PlayerModel[]>=>{
    return players
}

export const findPlayerById = async(id:number):Promise<PlayerModel | undefined> =>{
   return players.find(player => player.id === id)
}

export const insertPlayer = async(player:PlayerModel)=>{
   players.push(player)
}

export const findAndModifyPlayer = async(id: number, statistics: StatModel) =>{
    const index = players.findIndex(player => player.id === id)
    if(index !== -1){
        players[index].statistics = statistics
    } 
    return players[index]
}

export const findAndDeletePlayer = async(id:number)=>{
    const index  = players.findIndex(player => player.id === id)

   
    if(index!== -1){
      players.splice(index, 1)
      console.log(index)
        return true
    }
        return false
}