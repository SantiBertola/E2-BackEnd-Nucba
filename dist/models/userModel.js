"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
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
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
