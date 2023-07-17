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
exports.createGasto = void 0;
const gastosModel_1 = __importDefault(require("../models/gastosModel"));
const createGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gastosData = req.body;
    const { expense, detail } = gastosData;
    if (!expense || !detail) {
        res.json({
            msj: "the request is incomplete "
        });
        return;
    }
    // const userInDB = await User.findOne({name: User})
    // if(!userInDB) {
    //     res.json({
    //         msj: "Without a user, no expense will be recorded"
    //     })
    // }
    const gasto = new gastosModel_1.default(gastosData);
    yield gasto.save();
    res.json({
        gasto
    });
});
exports.createGasto = createGasto;
