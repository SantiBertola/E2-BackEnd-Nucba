"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUserByDNI = exports.getUsers = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const gastosModel_1 = __importDefault(require("../models/gastosModel"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const { name, lastName, dni, gasto } = userData;
    if (!dni || !name || !lastName || !gasto) {
        res.json({
            msj: "Required data is missing from the request",
        });
        return;
    }
    const gastoData = yield gastosModel_1.default.findOne({ expense: gasto });
    const userInDB = yield userModel_1.default.findOne({ dni: dni });
    if (userInDB) {
        res.json({
            msj: "This user is already register",
        });
    }
    const user = new userModel_1.default({
        name,
        lastName,
        dni,
        gasto: gastoData === null || gastoData === void 0 ? void 0 : gastoData._id,
    });
    yield user.save();
    res.json({
        msj: "User created",
        user,
    });
});
exports.createUser = createUser;
const getUsers = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condition = { state: true };
    const users = yield userModel_1.default.find(condition);
    res.json({
        users,
    });
});
exports.getUsers = getUsers;
const getUserByDNI = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const user = yield userModel_1.default.findOne({ dni: dni }).populate("gasto", ["expense", "detail"]);
    res.json({
        user,
    });
});
exports.getUserByDNI = getUserByDNI;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const user = yield userModel_1.default.findOneAndDelete({ dni: dni });
    if (!user) {
        res.json({
            msg: "The user doesn´t exist",
        });
        return;
    }
    res.json({
        user,
    });
});
exports.deleteUser = deleteUser;
