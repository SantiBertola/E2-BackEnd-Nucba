import { Model, ObjectId, Schema, model } from "mongoose";

export interface IUser {
  name: string;
  lastName: string;
  dni: number;
  gasto: ObjectId;
  state: boolean;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
    unique: true,
  },
  gasto: {
    type: Schema.Types.ObjectId,
    ref: "Gastos",
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const User: Model<IUser> = model<IUser>("User", UserSchema)

export default User
