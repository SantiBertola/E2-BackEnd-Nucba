import { Request, Response } from "express";

import User, { IUser } from "../models/userModel";
import Gastos from "../models/gastosModel";

export const createUser = async (req: Request, res: Response) => {
  const userData: IUser = req.body;

  const { name, lastName, dni, gasto } = userData;

  if (!dni || !name || !lastName || !gasto) {
    res.json({
      msj: "Required data is missing from the request",
    });
    return;
  }
  const gastoData = await Gastos.findOne({ expense: gasto });

  const userInDB = await User.findOne({ dni: dni });

  if (userInDB) {
    res.json({
      msj: "This user is already register",
    });
  }

  const user = new User({
    name,
    lastName,
    dni,
    gasto: gastoData?._id,
  });

  await user.save();

  res.json({
    msj: "User created",
    user,
  });
};

export const getUsers = async ({}, res: Response) => {
  const condition = { state: true };

  const users: IUser[] = await User.find(condition);

  res.json({
    users,
  });
};

export const getUserByDNI = async (req: Request, res: Response) => {
  const { dni } = req.params;

  const user: IUser | null = await User.findOne({ dni: dni }).populate("gasto", ["expense", "detail"]);

  res.json({
    user,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { dni } = req.params;

  const user = await User.findOneAndDelete({ dni: dni });

  if (!user) {
    res.json({
      msg: "The user doesn´t exist",
    });
    return;
  }

  res.json({
    user,
  });
};
