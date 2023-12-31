import express, { Express } from "express";
import { conexionDB } from "../database/config";
import userRouter from "../routes/userRoutes";
import gastosRouter from "../routes/gastosRoutes"


export class Server {
    app: Express

    constructor(){
        this.app = express();
        this.conexionToDB();
        this.middlewares();
        this.routes();
    }

    async conexionToDB():Promise<void>{
        await conexionDB()
    }

    middlewares(): void {
        this.app.use(express.json())
    }

    routes():void {
        this.app.use("/users", userRouter)
        this.app.use("/gastos", gastosRouter)
    }

    listen(): void {
        this.app.listen(8080, () => {
            console.log("Running in port 8080")
        })
    }
}



