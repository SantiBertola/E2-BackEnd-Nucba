import { Router } from "express";

import { createUser, getUsers, getUserByDNI, deleteUser } from "../controllers/userController";

const router = Router()

router.post("/", createUser)

router.get("/", getUsers)

router.get("/:dni", getUserByDNI)

router.delete("/:dni", deleteUser)


export default router