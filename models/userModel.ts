import { Model, ObjectId, Schema, model } from "mongoose";

export interface IUser {
  name: string;
  lastName: string;
  dni: number;
  expense: number;
  detail: string;
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
  // expenses: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Expenses",
  //   required: true,
  // },
  expense: {
    type: Number,
    required: true,
  },
  detail: {
    type: String,
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
