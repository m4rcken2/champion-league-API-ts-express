import {Request, Response} from 'express'
import * as service from '../services/players-service'
import { badRequest } from '../../utils/http-response'
import { StatModel } from '../models/stat-model'

export const getPlayers = async(req:Request, res:Response)=>{
    const response = await service.getPlayerService()
    res.status(response.statusCode).json(response.body)
}

export const getPlayerById= async(req: Request, res: Response)=>{
    const id = parseInt(req.params.id)
    const response = await service.getPlayerByIdService(id)

    res.status(response.statusCode).json(response.body)
}

export const postPlayer = async (req: Request, res: Response)=>{
    const bodyValue = req.body
     const Httpresponse = await service.createPlayerService(bodyValue)
    if (Httpresponse){
        res.status(Httpresponse.statusCode).json(Httpresponse.body)    
    }else{
        const response = await badRequest()
        res.status(response.statusCode).json(response.body)
    }
}

export const updatePlayer = async (req: Request, res: Response)=>{
    const id = parseInt(req.params.id)
    const bodyValue: StatModel = req.body
    const response = await service.updatePlayerService(id, bodyValue)
res.status(response.statusCode).json(response.body)
}

export const deletePlayerById = async (req:Request, res: Response)=>{
    const id = parseInt(req.params.id)
    const response = await service.deletePlayerByIdService(id)

    res.status(response.statusCode).json(response.body)
}