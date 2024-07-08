import fs from 'fs/promises'
import { ClubModel } from '../models/clubs-model'

export const findAllClubs = async():Promise<ClubModel[]>=>{
    const data  = await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: ClubModel[] = JSON.parse(data)

    return clubs
}