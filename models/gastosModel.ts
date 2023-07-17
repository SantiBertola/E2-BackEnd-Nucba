import { Model, Schema, model } from "mongoose";

export interface IGastos {
  expense: number;
  detail: string;
}

const GastosSchema = new Schema<IGastos>({
  expense: {
    type: Number,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
});

const Gastos: Model<IGastos> = model<IGastos>("Gastos", GastosSchema)

export default Gastos
