import { Request, Response } from "express";

import Gastos, {IGastos} from "../models/gastosModel";
import User from "../models/userModel";

export const createGasto = async (req: Request, res: Response ) => {
    const gastosData:IGastos = req.body;

    const {expense, detail} = gastosData;

    if(!expense || !detail) {
        res.json({
            msj: "the request is incomplete "
        })
        return
    }

    const userInDB = await User.findOne({name: User})

    if(!userInDB) {
        res.json({
            msj: "Without a user, no expense will be recorded"
        })
    }

    const gasto = new Gastos(gastosData)

    await gasto.save()

    res.json({
        gasto
    })


}