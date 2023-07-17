import { Request, Response } from "express";

import User, { IUser } from "../models/userModel";

export const createUser = async (req: Request, res: Response) => {
  const userData: IUser = req.body;

  const user = new User(userData);

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

  const user: IUser | null = await User.findOne({ dni });

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
