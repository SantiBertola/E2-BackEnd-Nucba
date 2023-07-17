import mongoose from "mongoose";

export const conexionDB = async():Promise<void> => {
    try {
        await mongoose.connect("mongodb+srv://santinobertola03:123456789Santi@e2-cluster.1tgvfxd.mongodb.net/")
        console.log("Database Online")
    } catch (error) {
        console.log(error, "Error al conectar a la base de datos")
    }
}